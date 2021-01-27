<template>
  <main>
    <GlobalNav />
    <Hero
      title="Website and app development"
      heading="Need a better website?"
      lead="Let's make it great. We partner with business and brands to build better websites and apps."
    />

    <div class="max-w-6xl p-1 flex justify-center items-center mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
        <TeamMember file="anthony.png" name="Anthony" bio="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <TeamMember file="gary.png" name="Gary" bio="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <TeamMember file="jenna.png" name="Jenna" bio="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <TeamMember file="sean.png" name="Sean" bio="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <TeamMember file="zach.png" name="Zach" bio="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      </div>
    </div>

    <ProConList />

    <About />
    <Testimonials />
    <CallToAction />
    <Footer />
  </main>
</template>
