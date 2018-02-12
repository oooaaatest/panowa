<template>
  <div>
    <button @click="showModal">compose tweet</button>
    <transition 
      name="modal-transition"
    >
      <div v-if="modalShowing">
        <div class="modal" @click="hideModal"></div>
        <div class="tweet-container">
          <h2 class="tweet-title">compose new tweet</h2>
          <div class="tweet-content clearfix">
            <textarea name="" v-model="tweetText"></textarea>
            <div class="img-container">
              <figure v-for="(photo,index) in photos" class="photo-item" :key="photo.id">
                <button @click="removePhoto(index)" >delete</button>
                <img :src="photo" >
              </figure>
            </div>
            <div class="button-container">
              <span class="remain-count" :class="{'dark-red': under20,'light-red': under10}">{{charactersRemaining}}</span>
              <button :disable="buttonDisable" @click="releseComment()">tweet</button>
            </div>
            <input multiple @change="handlePhotoUpload" ref="photoUpload" type="file" class="hide">
            <div>
                <button @click="triggerFileUpload" class="">upload</button>
                <button @click="deleteAll()">delete all</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tweetText: '',
      maxTweetText: 140,
      photos: [],
      modalShowing: false
    }
  },
  computed: {
    charactersRemaining: function () {
      return this.maxTweetText - this.tweetText.length
    },
    buttonDisable: function () {
      return (
        this.charactersRemaining === this.maxTweetText ||
        this.charactersRemaining < 0
      )
    },
    under20: function () {
      return this.charactersRemaining <= 20 && this.charactersRemaining > 10
    },
    under10: function () {
      return this.charactersRemaining <= 10 && this.charactersRemaining >= 0
    },
    phtoHasUploaded: function () {
      return this.photos.length > 0
    }
  },
  methods: {
    triggerFileUpload: function () {
      this.$refs.photoUpload.click()
    },
    removePhoto: function (index) {
      this.photos.splice(index, 1)
    },
    handlePhotoUpload: function (e) {
      let self = this,
        files = e.target.files
      for (var i = 0; i < files.length; i++) {
        let reader = new FileReader()
        reader.onloadend = function (evt) {
          self.photos.push(evt.target.result)
        }
        reader.readAsDataURL(files[i])
      }
    },
    hideModal: function () {
      this.modalShowing = false
    },
    showModal: function () {
      this.modalShowing = true
    },
    releseComment: function () {
      console.log(this.tweetText)
    },
    deleteAll: function () {
      if(this.photos.length < 1) {
        alert('no photos')
      } else {
        this.photos.splice(0, this.photos.length)
      }
      
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.tweet-container {
  position: relative;
  width: 530px;
  border: 1px solid #eee;
  z-index: 999;
  .tweet-title {
    text-align: center;
    font-size: 18px;
  }
  .tweet-content {
    padding: 15px;
    background: #f3f3f3;
    textarea {
      height: 200px;
      width: 99%;
      overflow: hidden;
    }
    .button-container {
      float: right;
      .remain-count {
        color: blue;
        &.dark-red {
          color: red;
        }
        &.light-red {
          color: green;
        }
      }
    }
    .img-container {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      background-color: rgba(0,0,0,.1);
      .photo-item {
        position: relative;
        margin: 10px;
        width: 80px;
        height: 80px;
        overflow: hidden;
        button {
          position: absolute;
          top: 5px;
          right: 5px;
        }
        img {
          max-width: 100%;
        }
      }
    }
  }
  button {
    background-color: #357edd;
    padding: 10px 15px;
    border: none;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    &[disable] {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}

.modal {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.hide {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
}

.clearfix {
  display: block;
  clear: both;
  overflow: hidden;
  content: "";
}
</style>

