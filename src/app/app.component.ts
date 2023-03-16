import { Component } from '@angular/core';
import {loadFull} from "tsparticles";
import {MoveDirection, ClickMode, HoverMode, OutMode, Engine, ISourceOptions, Container} from 'tsparticles-engine'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jana Lubojacká - Software Developer';
  id: string = "tsparticles";
  iconSize: number = 100;


  particlesOptions: ISourceOptions = {
    background: {
      image: "radial-gradient(#bbf1ff,#43c8de)",
      opacity: 0.1
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fps_limit: 120,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: HoverMode.grab
        },
        resize: true
      }
    },
    particles: {
      color: {
        value: '#fff'
      },
      links: {
        enable: true,
        color: '#fff',
        distance: 150,
        opacity: 0.7,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.25,
        /*
        attract: {enable: false},
        bounce: false,
        enable: true,
        direction: 'none',
        outMode: 'bounce',
        random: false,
        straight: false*/
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 100  /* how many particles to render*/
      },
      opacity: {
        value: {min: 0.5, max:0.95},
        random: true,
        animation: {
          enable: true,
          speed: 0.25,
          sync: false
        }
      },
      shape: {
        type: ['image'],

        options: {
          /*
          char: {
            value: ["foo", "y", "101",  "!=", "do", "while", "11", "for", "1", "in", "{}", "$i", "x", "case", "[a]", "elif", "const"],
            font: "Source Sans Pro",
            weight: 400,
            fill: true
          },*/

          image: [
            {
              src: "../assets/Vue js.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/angular.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/git.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/Python-logo-notext.svg",
              height: this.iconSize,
              width:this.iconSize
            },
            {
              src: "../assets/js_logo.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/java.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/nuxtjs-icon.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/html5-icon.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/css-icon.svg",
              height: this.iconSize,
              width: this.iconSize
            },
            {
              src: "../assets/GraphQL_Logo.svg",
              height: this.iconSize,
              width: this.iconSize
            }
          ]
        }
      },
      size: {
        random: true,
        value: 25,
        anim: {
          enable: false,
          speed: 0.25,
          minimumValue: 20,
          sync: false
        }
      }
    },
    detectRetina: true
  };


  async particlesInit(engine: Engine): Promise<void> {

    await loadFull(engine);
  }

  particlesLoaded(conatiner: Container): void {
    console.log("Loaded TsParticles!!!")
  }

}


