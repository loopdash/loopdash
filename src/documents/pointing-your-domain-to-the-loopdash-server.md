---
layout: layouts/document.njk
title: Pointing Your Domain to the Loopdash Server - Loopdash
h1: Loopdash Documents
subheadline: Pointing Your Domain to Our Server
description: A brief tutorial on how to point your DNS to Loopdash's server
sitemap:
  changefreq: weekly
  priority: 0.5
tags: documents
date: 2021-07-14
url: /documents/pointing-your-domain-to-the-loopdash-server
---

<article class="content">
  <div class="wrap1000">
    <div class="base scroll fadeUp">
      <p>Below you can find a brief tutorial on how to point your DNS to Loopdash's server. This is usually the last step needed to launch a site or stand up a staging server.</p>
      <ol>
        <li>Login to your DNS registrar. This is typically GoDaddy, Host Gator or Name Cheap.</li>
        <li>Find the DNS settings for the domain name you want to point to our servers.</li>
        <li>Add the following CNAME record.</li>
      </ol>
      <table>
        <thead>
          <tr>
            <th>Record Type</th>
            <th>Name</th>
            <th>Value</th>
            <th>TTL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CNAME</td>
            <td>your-domain.com</td>
            <td>104.236.48.77</td>
            <td>3600</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</article>
