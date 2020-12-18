<template>
  <main>
    <Nav />
    <!-- <Banner /> -->
    <Hero
      v-bind="{hero}"
    />

    <section class="max-w-4xl mx-auto py-16 overflow-x-hidden">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap">
          <div class="w-full lg:w-1/2 px-2 mb-5">
            <div class="shadow rounded-xl">
              <div class="text-white rounded-t-xl px-6 pt-6 pb-4 bg-red-600 text-red-100">
                <h3 class="text-2xl font-extrabold mb-2">
                  Are you...
                </h3>
              </div>
              <div class="p-6">
                <div class="flex items-start py-4">
                  <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                    <XIcon size="16" />
                  </div>
                  <div>
                    <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                      Tired of trying to DIY the perfect website?
                    </p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                    <XIcon size="16" />
                  </div>
                  <div>
                    <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                      Sick of working with developers who don’t understand your business?
                    </p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                    <XIcon size="16" />
                  </div>
                  <div>
                    <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                      Annoyed with freelancers who never communicate?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2 mb-5">
            <div class="shadow rounded-xl">
              <div class="text-white rounded-t-xl px-6 pt-6 pb-4 bg-green-600 text-green-100">
                <h3 class="text-2xl font-extrabold mb-2">
                  Do you...
                </h3>
              </div>
              <div class="p-6">
                <div class="flex items-start py-4">
                  <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                    <CheckIcon size="16" />
                  </div>
                  <div>
                    <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                      Want a tech partner to guide you?
                    </p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                    <CheckIcon size="16" />
                  </div>
                  <div>
                    <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                      Want a team that understands your brand?
                    </p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                    <CheckIcon size="16" />
                  </div>
                  <div>
                    <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                      Want developers to collaborate with, rather than make excuses?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section>
      <div class="bg-gray-100 py-20 px-3 mb-18">
        <TextSet
          h2="About Loopdash"
          h3="We’re Loopdash, a team of web development experts"
          p="When it comes to web development, we are second to none. Our software engineers have been building responsive websites and web applications for businesses large and small over a decade. Everything we code is user-friendly, responsive, and designed with your business in mind."
        />
      </div>
    </section>

    <!-- <div class="max-w-7xl mx-auto mb-16w px-3 py-7 space-y-10 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
      <Feature v-bind="{feature}" />
      <Feature v-bind="{feature}" />
      <Feature v-bind="{feature}" />
    </div> -->

    <section>
      <div class=" py-20 px-3 mb-18">
        <TextSet
          h2="Ouasdfasdfr"
          h3="What others are saying"
          p="When it comes to web development, we are second to none. Our software engineers have been building responsive websites and web applications for businesses large and small over a decade. Everything we code is user-friendly, responsive, and designed with your business in mind."
        />
      </div>
    </section>
    <div class="flex flex-wrap max-w-7xl mx-auto mb-6">
      <Testimonial
        name="Sam Jennings"
        position="Founder"
        testimonial="My team has been working with Loopdash for over two years now and they have been a tremendous partner. They have created a software tool web application for us that continues to evolve and is a big asset to our offering."
        image="https://marketplacestrategy.com/wp-content/uploads/2018/07/Sam-SQ.jpg"
      />
      <Testimonial
        name="Ryan Napoli"
        position="Technical Analyst"
        testimonial="Loopdash is an amazing asset to any team. Their attention to detail and willingness to listen to ideas from other team members is what makes them so special."
        image="https://lh6.googleusercontent.com/-Vxz9z7gqFF0/AAAAAAAAAAI/AAAAAAAAAAA/5gh5Edu5SiM/w120-h120-p-rp-mo-br100/photo.jpg"
      />
      <Testimonial
        name="Brandon Olmi"
        position="Founder"
        testimonial="Loopdash did a fantastic job with our website, was very prompt from start to finish. Helpful and made great suggestions to get the site we were looking for!"
        image="https://media-exp1.licdn.com/dms/image/C5603AQGU1Mska4IRhQ/profile-displayphoto-shrink_400_400/0/1523238944114?e=1613606400&v=beta&t=5CI__OA9q4Ee1vNx1xolBgPE8s4vv3EuDmPYE4hrz30"
      />
    </div>
    <CallToAction />
    </sectio>
  </main>
</template>

<script>
import { XIcon, CheckIcon } from 'vue-feather-icons'

export default {
  components: { CheckIcon, XIcon },
  data () {
    return {
      hero: {
        title: 'Website and app development',
        heading: 'Grow your business through the web',
        lead: 'Searching for a web development partner? Look no further. At Loopdash we build apps and site to make your business more efficient.'
      },
      feature: {
        title: 'Something',
        description: 'We have 290 Tailwind CSS variables in thematically connected categories to allow you to work effectively.'
      }
    }
  }
}
</script>
