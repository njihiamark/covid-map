# COVID TRACKER APP CHALLENGE

This is a small application to visualize COVID-19 presence in the United States.


# TECHNOLOGIES USED

The technologies used were:-

 - **Create React App**
 - **Recoil**
 - **Tailwind**
 - **React Leaflet**
 - **React Testing Library**

## Reasons behind the above choices
I initially started this on **Next.js** but later switched to **Create React App** because I had encountered some challenges with **Next.js** not supporting **React Suspense** and had some state inconsistencies due to **SSR** when one reloaded the page. Thus, I switched to **Create React App** to test **Recoil** better. 

I went for **Recoil** instead of **Redux** because during the weekend I saw **[this video](https://www.youtube.com/watch?v=_ISAA_Jt9kI/)** and from Dave's explanation, it seemed like a great choice since it feels like you are still writing **React** and it seemed reasonably practical to use and has very minimal boilerplate. This challenge provided the best testing environment for it since maps applications mostly have complex state needs. I must say I was impressed by **Recoil**. It deserves some consideration when it comes to state management for complex apps.  

I used **Tailwind** since it is really close to writing raw **CSS** thus it feels more flexible than **Bootstrap**. I think for large projects it is really beneficial as your **CSS** footprint doesn't grow compared to the other tools out there. Secondly, it has the option to turn off the utilities you don't need if you are aggressive with keeping the footprint extra small. Thirdly, it has a nice developer experience due to the IntelliSense plugin they have on given IDEs/editors.

For maps, I went for **React  Leaflet**. It is easy to use and doesn't require you to register or get some keys to get started. It is a marvellous library to work with out of the box.

When it came to testing, I used **React Testing Library**, its philosophy of testing DOM nodes makes much sense as you are testing how the user interacts with the application instead of implementation. When used together with **Recoil**, it works well for user-initiated events but when testing some scenarios like async stuff like when data loads when a component has mounted it is best to test the data stores themselves as implied [here in their docs.](https://recoiljs.org/docs/guides/testing/)

# Project Structure

I partitioned the application into the following major areas inside the src folder:-

 1. _services
 2. _state
 3. components

I will discuss each of the above in the following sections.

## 1. _services

Inside this folder we have helper methods. For example, Axios factories can be found here.

## 2. _state

Inside this folder, we have stuff related to Recoil for app-wide state management. We have the **atoms** folder, the atoms are our sources of truth and the **selectors** folder, the selectors represent pieces of derived state. It is from the selectors we fetch external data and derive state from atoms and other selectors. A good example of this is filtering something from the state. Components can subscribe to both atoms and selectors. 

## 3. components

Inside this folder, we have our React components and test files associated with them. 


# Short-comings experienced
1. I only wrote one test
2. I had to learn to use a new state management library
3. The API payload from the challenge document returned a 404 at the time of doing the test [here is the link](https://www.trackcorona.live/api)
4. I sourced for another endpoint online but some of the data did not have geo-data, so I had to limit the app to use 100 entries for it not to break the app. Here is the [link to the endpoint](https://covid19.mathdro.id/api/countries/USA/confirmed) I used.
5. The map is kinda slow to load on larger screens when zooming in

But despite the above, I really enjoyed this. Thank you for sharing this.

# Demo

The demo to this application is hosted on Vervel.

You can view the demo of the app **[here](https://covid-map-eta.vercel.app/)**

Thank you!!