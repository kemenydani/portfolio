<template>
    <v-app id="app" light>
      <v-content>
        <section class="screen-section" id="index">
          <v-parallax style="background: #17252A" :height="getVH()">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <img src="src/assets/vuetify.png" alt="Vuetify.js" height="200">
              <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
              <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section class="screen-section section-my-skills" id="my-skills" style="display: none">
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h1 class="headline">My Skills</h1>
                <span class="subheading">
                  <!--
                As a web-developer, I always develop my skills<br>
                  to make sure that my clients get the end result what they wanted.-->
              </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Graphic Work</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Web Programming</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Maintenance</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

        <section class="screen-section section-my-work" id="my-work">
          <v-layout>
            <v-flex xs12 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">My work</h2>
                <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
              </div>
            </v-flex>
          </v-layout>
          <div>
          <v-parallax src="src/images/parallax-my-work.jpeg" :height="getVH( 0.7 )" :class="{ showAll : galleryMyWork.showAll }">
            <v-layout justify-space-between align-start align-content-start wrap row>
              <v-flex v-for="(image, key) in galleryMyWork.items" :key="key"  xs12 sm6 md4 lg3>
                <v-card flat tile class="myWorkCard" @click.native="openDialogAt(key)" style="margin: 30px; background: none">
                  <v-card-media :src="image.url" height="240px">
                    <v-container class="myWorkImage" :style="{ backgroundColor: image.bgc }" fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox class="white--text">
                          <span class="headline">{{ image.title }}</span>
                          <v-chip color="secondary" class="category-chip white--text">{{ image.type.name }}</v-chip>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
            <div class="showMoreWorks">
              <v-chip outline @click.native="galleryMyWork.showAll = !galleryMyWork.showAll" color="white">SHOW ALL</v-chip>
            </div>
          </v-parallax>
          </div>
          <v-dialog v-model="galleryMyWork.dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card style="background: rgba(45,49,66, 0.95); color: #fff; position: relative;">
              <v-toolbar dark style="background: rgba(45,49,66, 0.6)">
                <v-toolbar-title>My Work</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click.native="galleryMyWork.dialog = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <div class="dialog-gallery">
                  <div class="gallery-nav nav-left">
                    <div class="nav-arrow arrow-left">
                      <v-icon large color="white">navigate_before</v-icon>
                    </div>
                  </div>
                  <div ref="viewport" class="viewport"
                       v-if="galleryMyWork.currentItem"
                       @click.native="zoom(key)"
                       :style="{ backgroundImage: 'url('+galleryMyWork.currentItem.url+')', backgroundSize: (galleryMyWork.currentItem.zoom != true ? 'initial' : 'contain') }">
                  </div>
                  <div class="gallery-nav nav-right">
                    <div class="nav-arrow arrow-right">
                      <v-icon large color="white">navigate_next</v-icon>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </section>
  
        <!-- modal -->
        
        
   
        <!-- modal end -->

        <section class="screen-section" id="contact">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-flex xs12 sm4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Company info</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 offset-sm1>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Contact us</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  </v-card-text>
                  <v-list class="transparent">
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>777-867-5309</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">place</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Chicago, US</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">email</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </section>

        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Made with
                <v-icon class="red--text">favorite</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	galleryMyWork : {
    		dialog: false,
        showAll : false,
        items: [
	        {
		        url : 'src/images/avenue-web.jpg',
		        title: 'Avenue Esports Website',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Webdesign, Coding',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/ergoweb-ergotic-website.jpg',
		        title: 'Ergotic Webdesign',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Webdesign',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/ergotic-logo.jpg',
		        title: 'Ergotic Logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/arrows_by_snowy1337-d4xqycf.png',
		        title: '  djile 3D logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: '3D Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/wallpaper_by_snowy1337-d7ljvtw.png',
		        title: 'Explicit T-shirt',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Gaming-wear',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/arrows_by_snowy1337-d4xqycf.png',
		        title: '  djile 3D logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: '3D Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/blue_wallpaper_1920x1080_by_snowy1337-d6u0erm.png',
		        title: 'Playdown Logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: '3D Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/c2c35a27d51aa40ac7f9ed1461d7f505-d5cdue4.png',
		        title: 'NetCups Gaming Webiste',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Webdesign, Coding',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/call_of_duty_hu_logo_by_snowy1337-d4ohv00.png',
		        title: 'Call of Duty Hungary Logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/akuma-website.jpg',
		        title: 'Team-Akuma Website',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Webcoding',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/encore_logo_by_snowy1337-d4oiboj.png',
		        title: 'Encore Esports Logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/juventus_club_hungary_logo_by_snowy1337-d5qd97o.png',
		        title: 'Juventus Club Hungary Logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/mydesire_deviantart_by_snowy1337-d71e1vy.png',
		        title: 'MyDesire Esports Logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/mydesire_esports_deviantart_by_snowy1337-d71dyrh.png',
		        title: 'MyDesire Esports Website',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Webdesign, Coding',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/netcs_by_snowy1337-d6tkfw0.png',
		        title: 'NetCups T-shirt',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Gaming-wear',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/netcups_logo_with_new_texture_by_snowy1337-d7jxtaz.jpg',
		        title: 'NetCups 3D logo',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: '3D Logo',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/rhino_deviantart_by_snowy1337-d71dygv.png',
		        title: 'Rhino Esports Website',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Webdesign, Coding',
			        color: 'primary'
		        },
	        },
	        {
		        url : 'src/images/mistral-site.png',
		        title: 'Team Mistral Website',
		        bgc: 'rgba(79, 93, 117, 0.5)',
		        type: {
			        name: 'Webcoding',
			        color: 'primary'
		        },
	        }
        ],
        currentItem: {
    			zoom: true,
        }
      },
      size: 'sm',
      title: 'Your Logo',
    }
  },
  watchers : {
  	'currentItem.zoom' : {
  		handler: (v) => {
  			if(v) {
  				
        }
        else
        {
  				
        }
      },
      deep: true
    }
  },
  methods: {
  	getVH( modifier = 1){
  		return window.innerHeight * modifier;
    },
  	zoom( )
    {
  		this.galleryMyWork.currentItem.zoom = true;
    },
  	openDialogAt( key )
    {
  		this.galleryMyWork.currentItem = this.galleryMyWork.items[key];
	    this.galleryMyWork.currentItem.zoom = false;
  		this.galleryMyWork.dialog = true;
    }
  }
}
</script>

<style lang="scss">
  
  .showAll {
    min-height: auto !important;
    height: auto !important;
  }
  
  .showMoreWorks
  {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+1,000000+100&0+0,0.26+25,0.51+25,0.92+57,1+100 */
    background: -moz-linear-gradient(top, rgba(45,49,66,0) 0%, rgba(45,49,66,0.02) 1%, rgba(45,49,66,0.51) 25%, rgba(45,49,66,0.92) 57%, rgba(45,49,66,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(45,49,66,0) 0%,rgba(45,49,66,0.02) 1%,rgba(45,49,66,0.51) 25%,rgba(45,49,66,0.92) 57%,rgba(45,49,66,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(45,49,66,0) 0%,rgba(45,49,66,0.02) 1%,rgba(45,49,66,0.51) 25%,rgba(45,49,66,0.92) 57%,rgba(45,49,66,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 25%;
    bottom: 0;left: 0; right: 0;
    
    > * {
      margin-top: 20px;
    }
  }
  
  .screen-section {
    

    
    padding: 0 !important;
    margin: 0 !important;
  }
  
  #my-work {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > :last-child, .v-parallax {

      align-self: flex-end;
      justify-content: flex-start !important;
      align-items: flex-start !important;
      align-content: flex-start !important;
      .flex {
        justify-content: flex-start !important;
        align-items: flex-start !important;
        align-content: flex-start !important;
        .container {
          justify-content: flex-start !important;
          align-items: flex-start !important;
          align-content: flex-start !important;
        }
      }
    }
    > * {
      min-width: 100%;
    }
  }
  
  .dialog-gallery {
    height: calc(100vh - 110px);
    min-height: calc(100vh - 110px);
    display: flex;
  
    .viewport
    {
      flex: 1;
      height: 100%;
      min-height: 100%;
      position: relative;
      background-position: center center;
      //background-size: contain;
      cursor: zoom-in;
    }
    
    .gallery-nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      .nav-arrow {
        &.arrow-left { margin-right: 15px; }
        &.arrow-right { margin-left: 15px; }
        height: 40px;
        width: 40px;
        background: #4F5D75;
        text-align: center;
        line-height: 40px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
  
  .category-chip {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  .myWorkImage {
    cursor: pointer;
  }
  .myWorkImage:hover {
    -webkit-transition: all 500ms ease-in-out;
    -ms-transition: ball 500ms ease-in-out;
    transition: all 500ms ease-in-out;
    background: none !important;
  }
  .myWorkCard {
    border: none;
    outline: 0;
    background: none;
  }
  .myWorkCard:hover {
    -webkit-transition: all 200ms ease-in-out;
    -ms-transition: ball 200ms ease-in-out;
    transition: all 200ms ease-in-out;
    transform: scale(1.04);
    z-index: 100;
    border: none;
    outline: 0;
    background: none;
    border-radius: 2px;
    -webkit-box-shadow: 0px 0px 97px 15px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 97px 15px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 97px 15px rgba(0,0,0,0.5);
  }
</style>
