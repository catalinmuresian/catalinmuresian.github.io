<template>
  <section
       :class="!isSearch ? 'animation-section' : 'remove-animation' "
       class="project-card">
    <q-card style="width: 100%;" @click="openModal">
      <q-img :src="`${img}`"
           loading="lazy"
           :alt="img" />
      <q-icon class="icon-open-full"
              color="grey-6"
              size="30px"
              name="fullscreen"/>
    </q-card>
    <div class="info">
      <div style="display: flex;margin-top: 5px;justify-content: space-between;align-items: baseline;">
        <h3>{{ title }}</h3>
        <div v-if="link" class="see-live">
        <a
          style="
                gap: 10px;
                display: flex;
                cursor: pointer;
                font-weight: 700;
                color: #41B783FF;
                text-decoration: none;
                align-items: center;"
          :href="link" target="_blank">
          See live <q-spinner-radio size="1em" color="#41B783FF" /></a>
      </div>
      </div>
      <div class="skills">
        <p v-for="skill in skills"
          :key="skill">{{ skill }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>

const emit = defineEmits(['open-modal'])

const props = defineProps({
  img: String,
  title: String,
  skills: Array,
  id: String,
  link: String,
  isSearch: Boolean
})

function openModal () {
  emit('open-modal', {
    id: props.id,
    img: props.img,
    skills: props.skills,
    title: props.title,
    link: props.link
  })
}
</script>

<style lang="scss">
.project-card {
  max-width: 500px;
  width: 100%;
  .q-card {
    border-radius: 5px;
    width: 100%;
    .q-img {
      width: 100%;
      border-radius: 5px;
    }
    .icon-open-full {
      position: absolute;
      right: 8px;
      bottom: 8px;
      display: none;
    }
  }
  .info {
    h3 {
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .see-live {
      display: flex;
      align-items: center;
      gap: 5px;
      > a {
        border: 1px solid #41B783FF;
        padding: 2px 12px;
        border-radius: 5px;
      }
      .q-spinner {
        color: #41B783FF !important;
      }
    }
    .skills {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-bottom: 8px;

      p {
        color: $grey;
        margin: 0;
        font-size: 14px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 45%;
    max-width: 540px;
    .q-card {
      cursor: pointer;
      .icon-open-full {
        display: block;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    width: 30%;
    .info {
      .skills {
        p {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
