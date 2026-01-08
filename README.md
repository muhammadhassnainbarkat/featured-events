# **Featured Events**

A responsive single-page website built with **React**, **Bootstrap**, and **Vite** to showcase upcoming local events. Created for the **Dynamics 360 Web Development Internship Case Study**.

**Live Preview:** [https://ayeshazafar-az.github.io/featured-events](https://ayeshazafar-az.github.io/featured-events)

---

## **Features**

* Responsive Navbar with logo and links
* Hero section with main heading
* Featured Events section with 5 event cards
* Event details: name, date, time, location, description, register button
* Search bar to filter events by name
* Footer with contact information and quick links

## **Tech Stack**

* React JS
* Bootstrap 5
* Vite
* GitHub Pages (for deployment)

## **How to Create This Project**

1. **Check Node.js and npm**
   Make sure Node.js and npm are installed:

    * node -v   
    * npm -v

   * If not installed, download from [https://nodejs.org](https://nodejs.org).

2. **Create a new React + Vite project**

   npm create vite@latest featured-events (Project Name)
   
   * Project name: `featured-events`
   * Framework: `React`
   * Variant: `JavaScript`

3. **Go into project folder**

    cd featured-events

4. **Install dependencies**

   npm install

5. **Install Bootstrap for styling**

   npm install bootstrap

   Import Bootstrap CSS in `main.jsx`:

   import 'bootstrap/dist/css/bootstrap.min.css';

6. **Create project folder structure**

   src/
   ├── assets/        # images (e.g., logo)
   ├── components/    # Navbar.jsx, Hero.jsx, Events.jsx, EventCard.jsx, Footer.jsx
   ├── data/          # events.js (dummy events data)
   ├── App.jsx        # Main layout combining all components
   └── main.jsx       # React entry point

7. **Create components**

   * `Navbar.jsx` → Top navigation bar with links
   * `Hero.jsx` → Hero section with heading
   * `Events.jsx` → Featured events section with search/filter
   * `EventCard.jsx` → Individual event card
   * `Footer.jsx` → Footer with contact info

8. **Add scroll IDs for navigation**

   * Hero section: `id="hero"`
   * Events section: `id="events"`
   * Footer section: `id="contact"`

9. **Start development server**

   npm run dev

   Open your browser at `http://localhost:5173`.

10. **Build for production (optional)**

    npm run build

    Creates optimized `dist` folder ready for deployment.
