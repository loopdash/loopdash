<template>
  <section>
    <div class="bg-gray-200 pt-20 pb-12 px-4">
      <div class="mb-6">
        <TextSet
          h2="About Loopdash"
          h3="We're a team of technologists"
          p="Our developers have been building websites and apps for over a decade. Everything we make is user friendly and built the the right way."
        />
      </div>

      <div class="max-w-6xl flex justify-center items-center mx-auto mb-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl">
          <TeamMember name="anthony" position="Developer" bio="He handles some of the WordPress development." />
          <TeamMember name="gary" position="Developer" bio="He does business stuff and writes a little code." />
          <TeamMember name="jenna" position="Operations" bio="She manages all of our projects and deployments." />
          <TeamMember name="sean" position="Developer" bio="He codes and supports our WordPress instances." />
          <TeamMember name="zach" position="Developer" bio="He builds web apps, websites and manages servers." />
        </div>
      </div>
    </div>
  </section>
</template>
