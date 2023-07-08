# Encrypting projects with SOPs

### Installation \[pkg - direnv and age\]

```bash
sudo apt install direnv age
```

Installing sops with ansible for simplicity

```bash
ansible-playbook community.sops.install_localhost
```

### Setup age

Create a directory for storing your SOPs encrypted keys. Then generate a private key and public key utilizing **age**.

```
mkdir -p ~/.config/sops/age
age-keygen -o ~/.config/sops/age/keys.txt
cat ~/.config/sops/age/keys.txt
```

### Creating a .envrc file to load into the shell

For **zsh** shell, you need to hook the process; look in: [https://direnv.net/docs/hook.html](https://direnv.net/docs/hook.html)

```
#shellcheck disable=SC2148,SC2155
export SOPS_AGE_KEY_FILE=$(expand_path ~/.config/sops/age/keys.txt)
```

**Note: ShellCheck disables linting ; due to the shell codes**

Load the age into the directory

```bash
direnv allow
```

### Encrypting files:

```bash
sops --encrypt --age $(cat $SOPS_AGE_KEY_FILE |grep -oP "public key: \K(.*)") -i file-to-encrypt.yaml
```

### Decrypting files:

```bash
sops --decrypt --age $(cat $SOPS_AGE_KEY_FILE |grep -oP "public key: \K(.*)") -i file-to-encrypt.yaml
# OR
sops --decrypt --age $(cat $SOPS_AGE_KEY_FILE |grep -oP "public key: \K(.*)") -i file-to-encrypt.yaml > decrypted-file.yaml
```


### How to use:

In the case of terraform. We created a **terraform.sops.yaml** file that will hold whatever variables we desire.

```haskell
#===============================================================================
# vSphere Provider
#===============================================================================

terraform {
  required_providers {
    sops = {
      source = "carlpett/sops"
         version = "0.7.2"
      }
   }
}

data "sops_file" "vsphere-secrets" {
   source_file = "terraform.sops.yaml"
}

# Configure the vSphere Provider
provider "vsphere" {
   vsphere_server = "${var.vsphere_vcenter}"
   user = data.sops_file.vsphere-secrets.data["vsphere_user"]
   password = data.sops_file.vsphere-secrets.data["vsphere_password"]

   allow_unverified_ssl = "${var.vsphere_unverified_ssl}"
}

# Configure the Vultr Provider
provider "vultr" {
   api_key = "${data.sops_file.vsphere-secrets.data["vultr_api_key"]}"
   rate_limit = 100
   retry_limit = 3
}
```
