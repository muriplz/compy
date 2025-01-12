<script setup>
import {ref} from "vue";

import Header from "@/components/Header.vue";
import HorizontalVideoEntry from "@/components/HorizontalVideoEntry.vue";
import VerticalVideoEntry from "@/components/VerticalVideoEntry.vue";
import ContactMe from "@/components/ContactMe.vue";

// Import videos
import Trailer1 from "@/assets/media/Lowbu.mp4";
import Punkturk from "@/assets/media/Shortdoc.mp4";
import Musicvidturk from "@/assets/media/muscvid.mp4";
import Redstartrain from "@/assets/media/trains.mp4";
import Gamincomp from "@/assets/media/Gamincomp.mp4";
import Kryeitrailer from "@/assets/media/Kryeitrailer.mp4";
import Fados from "@/assets/media/faro.mp4";
import Albania from "@/assets/media/alb.mp4";
import Senior from "@/assets/media/Senior.mp4";
import Egersundsk8 from "@/assets/media/sk8.mp4";
import tresDhexOG1 from "@/assets/media/3DHex_1.mp4";


import {useMeta} from "vue-meta";
import RevyvalSection from "@/components/RevyvalSection.vue";
import HonorableSection from "@/components/HonorableSection.vue";
import MuriSection from "@/components/MuriSection.vue";

useMeta({
  title: 'Sancho Vegard - Portfolio',
  meta: [
    {
      vmid: 'description',
      name: 'description',
      content: 'Welcome to the portfolio of Sancho Vegard. Explore creative projects, including short films, documentaries, and gaming content.'
    }
  ]
})

// Initialize video entries
const horizontalVideoEntries = ref([
  {
    title: "Script Writing for short Animation Sketch",
    src: Senior,
    description: `
    What if life after 70 just begins?
    This sketch is about a grandma who has peculiar pets, questionable friends and is involved in some illegal activities. There is gambling, murder, and a deer.
    The film is currently in distribution for festivals. Private screening can be arranged for business purposes.
    This is the trailer for a sketch I collaboratively wrote with Bonnistripe
    You are welcome to check further at: www.bonnistripe.com
    `,
    date: '10.2024',
    id: 39,
  },
  {
    title: 'Compilation of Footage Edited for Urban Exploring',
    src: Redstartrain,
    description: 'This is a compilation of shots from an urban exploring Youtube Channel, an adventure into the Red Star Train Graveyard in Budapest, Hungary. Editing the end of this 4-minute video was the most enjoyable part of the project.',
    date: '10.2022',
    id: 4,
  },
  {
    title: 'Low Budget Short Movie Footage Compilation',
    src: Trailer1,
    description: 'These are some of shots/scenes mashed up into a ⅔ min “trailer”. All of which were directed and edited by me while I was studying abroad in Budapest Metropolitan University. It was initially challenging to make visually appealing imagery and content due to covid-19 restrictions, meaning smaller teams and equipment shortage. But I got quite a lot out of the experience regardless. We really had to get creative to make some solid stories in some hard times, and I am positive we got to make the best out of what we had. This led to some real fun working environments, and a great team working towards same vision, motivated and optimistic about it. The last scene being my personal favorite.',
    date: '09.2021',
    containsSlurs: true,
    id: 1,
  },
  {
    title: 'Short Documentary Compilation',
    src: Punkturk,
    description: 'This video features selected shots from a short documentary about punk culture in Istanbul, Turkey. Over five days of shooting, my colleague Emre and I interviewed local punk bands and followed their daily lives. Despite a packed schedule, we managed to write a song, record it, and shoot a music video. The entire process was enriching. I learned a great deal, met fascinating people, and even picked up some Turkish behind the cameras. However, editing the footage was quite challenging.',
    date: '02.2022',
    containsSlurs: true,
    id: 2,
  },
  {
    title: 'Part of the Music Video for the Turkish Punk Short-Documentary',
    src: Musicvidturk,
    description: 'This clip is from the song and music video we produced on the fifth day of shooting for the documentary mentioned above.',
    date: '02.2022',
    id: 3,
  },

  {
    title: 'Favorite Edits for Gaming YouTubers/Streamers',
    src: Gamincomp,
    description: 'I\'ve also enjoyed editing content for gaming YouTubers and streamers. This lighter, comedic approach to editing is always fun and allows for creative, silly moments. It’s a refreshing break from traditional editing styles.',
    date: '04.2022',
    containsSlurs: true,
    id: 5,
  },
  {
    title: 'Trailer for the Minecraft Server Kryeit',
    src: Kryeitrailer,
    description: 'Creating a trailer for the Minecraft server Kryeit was a unique challenge. Initially unsure how to make a game of “blocks” appear cinematic, I collaborated with the server admin to install mods and find engaging ways to showcase the server. I’m very pleased with the creative solutions we developed and the final result.',
    date: '04.2023',
    id: 6,
  },

]);

const verticalVideoEntries = ref([
  {
    title: 'Short “Social Media” Videos from Various Events',
    src: Fados,
    description: 'This section features short edits, typically no longer than\n' +
        'a minute, from various trips and events. I am comfortable\n' +
        'with this format and am continually improving. I really\n' +
        'enjoy editing these for people, here are some examples\n' +
        'of aftermovies I’ve created for social media:',
    date: '05.2024',
    id: 7,
  },
  {
    title: 'Making of Compilation:',
    src: tresDhexOG1,
    description: 'This video made for 3DInformatik showcases the\n' +
        'creation of a 3D-printed Hextech Chest prop from\n' +
        'Arcane/League of Legends. With dynamic, rhythmic\n' +
        'editing and detailed close-up shots, it highlights the\n' +
        'intricate crafting process. The transitions and\n' +
        'animations, especially those mimicking Jinx\'s\n' +
        'flashbacks, add intensity and flair. Filming and editing\n' +
        'this project was a rewarding experience.',
    date: '12.2024',
    id: 8,
  },
  {
    title: 'Skating Event in Norway',
    src: Egersundsk8,
    description: 'Egersund Skateclub, from a small town in Norway gathered around to have a fun session at the closest indoor-skatepark, 4 hours away through overwhelmingly big amounts of snow and a little bit of ice-drifting (professional driver behind the wheel, do not attempt)',
    date: '08.2023',
    id: 10,
  },
  {
    title: 'Albania',
    src: Albania,
    description: 'An energetic edit compiling the roadtrip of 3 friends through Albania with one action camera and a small drone, the images are full of rhythm in a chaotic way, just like roads of the country itself.',
    date: '06.2022',
    id: 8,
  },

]);
</script>

<template>

  <Header/>

  <p class="about-me">
    Hello there, my name is Sancho, and this is my vault of content where you can explore some of my creations.
    I’ve selected footage from my favorite projects, whether I produced, edited, or directed them. Then created a 2-4 minute
    compilation videos for some of the categories I've worked on, with descriptions for context underneath. Take a look around and enjoy!
  </p>

  <div class="video-entries-container">
    <VerticalVideoEntry
        :id="entry.id"
        v-for="(entry, index) in verticalVideoEntries"
        :key="index"
        :index="index"
        :title="entry.title"
        :src="entry.src"
        :description="entry.description"
        :date="entry.date"
    />

    <RevyvalSection/>
    <HonorableSection/>

    <HorizontalVideoEntry
        :id="entry.id"
        v-for="(entry, index) in horizontalVideoEntries"
        :key="index"
        :title="entry.title"
        :src="entry.src"
        :description="entry.description"
        :containsSlurs="entry.containsSlurs"
        :date="entry.date"
    />


  </div>

  <MuriSection/>
  <ContactMe/>
</template>

<style scoped>
.about-me {
  padding: 8px;
  background-color: var(--color-background-mute);
  border-radius: 10px;
  border: 1px solid var(--color-text);
  font-size: 22px;
  text-align: center;
  margin: 0 20px 20px 20px;
}

.video-entries-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

@media(max-width: 800px) {
  .about-me {
    font-size: 16px;
  }
}
</style>
