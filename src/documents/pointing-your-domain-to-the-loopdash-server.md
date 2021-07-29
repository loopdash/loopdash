---
layout: layouts/default.njk
h1: pointing your domain to the loopdash server
h2: Pointing Your Domain to the Loopdash Server
excerpt: A brief tutorial on how to point your DNS to Loopdash's server
sitemap:
  changefreq: weekly
  priority: 1.0
tags: documents
date: 2021-07-14
url: /documents/how-to-delegate-access-to-godaddy
---

<p class="mb-5"><span class="dropcap">B</span>elow you can find a brief tutorial on how to point your DNS to Loopdash's server. This is usually the last step needed to launch a site or stand up a staging server.</p>

<ol class="list-decimal list-inside mb-6">
  <li>Login to your DNS registrar. This is typically GoDaddy, Host Gator or Name Cheap.</li>
  <li>Find the DNS settings for the domain name you want to point to our servers.</li>
  <li>Add the following CNAME record.</li>
</ol>

<div class="rounded-xl overflow-hidden bg-green-50 p-5 text-base">
  <table class="table-auto">
    <thead class="green-600">
      <tr>
        <th class="w-1/2 px-4 py-2 text-green-600">Record Type</th>
        <th class="w-1/2 px-4 py-2 text-green-600">Name</th>
        <th class="w-1/2 px-4 py-2 text-green-600">Value</th>
        <th class="w-1/2 px-4 py-2 text-green-600">TTL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-green-500 px-4 py-2 text-green-600 font-normal">CNAME</td>
        <td class="border border-green-500 px-4 py-2 text-green-600 font-normal italic">your-domain.com</td>
        <td class="border border-green-500 px-4 py-2 text-green-600 font-normal font-mono">104.236.48.77</td>
        <td class="border border-green-500 px-4 py-2 text-green-600 font-normal">3600</td>
      </tr>
    </tbody>
  </table>
</div>