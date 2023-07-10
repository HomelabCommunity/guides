import React from 'react'
import Unsplash from 'react-unsplash-wrapper'

const imgWidth = 250
const imgHeight = 200

const imageIds = {
  hardware: 'uq5RMAZdZG4',
  storage: 'yJVpnfqu8GY',
  networking: 'C9dTdBM3joM',
  automation: 'iDQVmcPFOCI',
  security: 'WwMdMFvudxs',
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <main className="container">

      <section className="margin-vert--xl">
        <h1>Welcome to the Homelab Guides</h1>
        <p>Here, you will find a treasure trove of helpful documents to assist you in setting up and running various technologies within your homelab. Whether you're a seasoned enthusiast or just starting your journey, these guides are designed to provide clear and concise instructions, helping you navigate the intricacies of your personal lab environment.</p>
      </section>

      <section className="margin-vert--xl">
        <h2>So, What is a Homelab?</h2>
        <p>A homelab is a unique space where individuals can experiment, learn, and implement different technologies without the constraints of a production environment. It serves as a playground for enthusiasts, IT professionals, and hobbyists to tinker with hardware, software, networking, virtualization, and much more. With a homelab, you have the freedom to explore, innovate, and gain hands-on experience with cutting-edge technologies.</p>
        <p>However, building and managing a homelab can be a daunting task. That's where our comprehensive guides come in. We have carefully curated an extensive collection of documentation covering a wide range of topics, including but not limited to:</p>
      </section>

      <section className="margin-vert--xl">
        <div className="row">
          <div className="col col--3">
            <Unsplash width={imgWidth} height={imgHeight} photoId={imageIds.hardware} />

          </div>
          <div className="col col--9 margin-top--lg">
            <h2>Hardware</h2>
            <p>Hardware Setup: Discover the essential components for your homelab, from servers, networking equipment, storage devices, and power management. Our guides will walk you through the process of selecting and setting up the right hardware for your needs.</p>
          </div>
        </div>
      </section>

      <section className="margin-vert--xl">
        <div className="row">
          <div className="col col--3">
            <img src={'img/vms.png'} alt={'Virtualizations'} height={'200px'} style={{
              display: 'flex',
              justifySelf: 'center',
              margin: '0 auto'
            }}/>
          </div>
          <div className="col col--9 margin-top--lg">
            <h2>Virtualization</h2>
            <p>Dive into the world of virtual machines (VMs) and containers. Learn how to set up popular hypervisors such as VMware ESXi, Microsoft Hyper-V, or open-source alternatives like <a href="https://proxmox.com">Proxmox VE</a>. Explore containerization platforms like <a href="https://docker.com">Docker</a> and <a href="https://kubernetes.io">Kubernetes</a> to harness the power of scalable and portable applications.</p>
          </div>
        </div>
      </section>

      <section className="margin-vert--xl">
        <div className="row">
          <div className="col col--3">
            <Unsplash width={imgWidth} height={imgHeight} photoId={imageIds.networking} />
          </div>
          <div className="col col--9 margin-top--lg">
            <h2>Networking</h2>
            <p>Master the art of network design, configuration, and security within your homelab. Whether you're interested in setting up VLANs, VPNs, or mastering routing and switching concepts, our guides will equip you with the knowledge needed to build a robust and secure network infrastructure.</p>
          </div>
        </div>
      </section>

      <section className="margin-vert--xl">
        <div className="row">
          <div className="col col--3">
            <Unsplash width={imgWidth} height={imgHeight} photoId={imageIds.storage} />
          </div>
          <div className="col col--9 margin-top--lg">
            <h2>Storage</h2>
            <p>Unleash the potential of your homelab by understanding different storage technologies, including Network-Attached Storage (NAS), Storage Area Networks (SAN), and software-defined storage solutions. Learn how to configure RAID, set up shared storage, and ensure data redundancy and protection.</p>
          </div>
        </div>
      </section>

      <section className="margin-vert--xl">
        <div className="row">
          <div className="col col--3">
            <Unsplash width={imgWidth} height={imgHeight} photoId={imageIds.automation} />
          </div>
          <div className="col col--9 margin-top--lg">
            <h2>Automation &amp; Orchestration</h2>
            <p>Streamline your homelab operations through automation and orchestration tools like Ansible, Puppet, or Terraform. Our guides will demonstrate how to simplify repetitive tasks, manage configuration, and deploy infrastructure as code.</p>
          </div>
        </div>
      </section>

      <section className="margin-vert--xl">
        <div className="row">
          <div className="col col--3">
            <Unsplash width={imgWidth} height={imgHeight} photoId={imageIds.security} />
          </div>
          <div className="col col--9 margin-top--lg">
            <h2>Security &amp; Monitoring</h2>
            <p>Safeguard your homelab against threats and gain insights into the health and performance of your environment. Explore topics such as firewalls, intrusion detection and prevention systems (IDS/IPS), security best practices, and monitoring tools like Prometheus and Grafana.</p>
          </div>
        </div>

      </section>

      <section className="margin-vert--xl">
        <p>Each guide is crafted with the aim of providing you with practical, step-by-step instructions, accompanied by relevant diagrams and examples. Whether you're interested in building a lab for personal projects, studying for certifications, or simply expanding your knowledge, our documentation will be your trusted companion throughout your homelab journey.</p>
        <p>So, fasten your seatbelt, prepare to delve into the world of homelabs, and let our guides be your guideposts along the way. Get ready to unleash your curiosity, learn new technologies, and unlock the full potential of your homelab. The adventure begins here!</p>
      </section>
    </main>
  );
}
