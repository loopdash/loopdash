---
layout: single-proposal.njk
meta:
  title: Proposal for [CLIENT]
  description: [SHORT DESCRIPTION MAX 164 CHARACTERS]
sitemap:
  changefreq: monthly
proposal:
  name: 
  client: [CLIENT]
  description: [SHORT DESCRIPTION MAX 164 CHARACTERS]
  summary: |
    We will approach this engagement with careful consideration and thoughtful execution, ensuring that every phase of the process is handled with precision and purpose. By following a structured timeline with clearly defined milestones, we will ensure progress remains aligned with your vision. The investment for this work can be found in <a href="{{ proposal.links[0].url }}" target="_blank" class="link plausible-event-name=Proposal+Sign+Link+Click">your proposal</a>. 
    <br /><br />
    The full project has an estimated timeline of {{ proposal.duration }} to deliver an effective outcome. Please feel free to read more <a href="/about" target="_blank" class="link plausible-event-name=Proposal+About+Link+Click">about us</a> or refer to our <a href="/faq" target="_blank" class="link plausible-event-name=Proposal+FAQ+Link+Click">commonly asked questions</a>.
  website: [WEBSITE URL]
  video: [LOOM VIDEO]
  price: [YOUR ESTIMATED PRICE]
  duration: [ESTIMATE HOW LONG PROJECT WILL TAKE]
  services:
  - name: [NAME OF SERVICE ITEM] # ADD AS MANY AS ARE NECESSARY
    description: [DESCRIPTION OF SERVICE ITEM | MAX 80 CHARACTERS]
    duration: [ESTIMATE HOW LONG SERVICE ITEM WILL TAKE]
  links: 
  - url: [SIGNING LINK] # SHOULD BE https://loopda.sh/[CLIENT-NAME] hypenated
    text: Review proposal
    icon: pencil
    event: Proposal+Review+Button+Click
  - url: null
    text: null
    icon: null
    event: Proposal+Alt+Button+Click
priority: 0.6
tags: proposals
date: # [DATE IN YYYY-MM-DD]
url: /proposals/example
---