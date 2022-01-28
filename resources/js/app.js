require('./bootstrap');
import { createApp } from 'vue';

import Home from './components/Home.vue'

// let app=createApp(Home)
Echo.channel('posts')
    .listen('PostPublished', post => {
        if (! ('Notification' in window)) {
            alert('Web Notification is not supported');
            return;
        }

        Notification.requestPermission( permission => {
            let notification = new Notification('New post alert!', {
                body: post.title, // content for the alert
                icon: "https://img.toolstud.io/240x160/3b5998/fff&text=+360x240+" // optional image url
            });

            // link to page on clicking the notification
            notification.onclick = () => {
                window.open(window.location.href);
            };
        });
    })
// let app = new Vue({
//      // created() {
//      //     Echo.channel('posts')
//      //         .listen('PostPublished', post => {
//      //             if (! ('Notification' in window)) {
//      //                 alert('Web Notification is not supported');
//      //                 return;
//      //             }
//      //
//      //             Notification.requestPermission( permission => {
//      //                 let notification = new Notification('New post alert!', {
//      //                     body: post.title, // content for the alert
//      //                     icon: "https://img.toolstud.io/240x160/3b5998/fff&text=+360x240+" // optional image url
//      //                 });
//      //
//      //                 // link to page on clicking the notification
//      //                 notification.onclick = () => {
//      //                     window.open(window.location.href);
//      //                 };
//      //             });
//      //         })
//      // }
//  })
//
// app.mount("#desk-noti")
