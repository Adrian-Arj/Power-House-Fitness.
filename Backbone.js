// Define workouts
// const upperBodyWorkouts = [
//     "Push-ups",
//     "Bicep curls",
//     "Shoulder press",
//     "Tricep dips",
//     "Chest flyes",
//     "Lat pull-downs",
//     "Dumbbell rows",
//     "Incline bench press",
//     "Reverse flyes",
//     "Standing barbell curl"
// ];

// const lowerBodyWorkouts = [
//     "Squats",
//     "Lunges",
//     "Calf raises",
//     "Deadlifts",
//     "Leg press",
//     "Step-ups",
//     "Hip thrusts",
//     "Romanian deadlifts",
//     "Glute bridges",
//     "Box jumps"
// ];

// const wholeBodyWorkouts = [
//     "Burpees",
//     "Mountain climbers",
//     "Jumping jacks",
//     "Plank",
//     "Crunches",
//     "High knees",
//     "Squat jumps",
//     "Bear crawl",
//     "Tuck jumps",
//     "Russian twist"
// ];
// Get daily workout data from API or local storage
const upperBodyButton = document.getElementById("upper-body-button");
const lowerBodyButton = document.getElementById("lower-body-button");
const wholeBodyButton = document.getElementById("whole-body-button");
const workoutTitle = document.getElementById("workout-title");
const workoutDescription = document.getElementById("workout-description");

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

function loadWorkout(title, videos) {
  workoutDescription.classList.add("hidden");
  setTimeout(() => {
    workoutTitle.innerHTML = title;
    workoutDescription.innerHTML = `
      <p>Here Are a Few Types of ${title/*.toUpperCase()*/} Workouts For Today:</p>
      <ul>
        ${videos.map(video => `
          <li>
            <iframe width="560" height="315" src="${video.url}" title="${video.title}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <div class="video-title">${video.title}</div>
          </li>
        `).join('')}
      </ul>
    `;
    workoutDescription.classList.remove("hidden");
  }, 200);
}

upperBodyButton.addEventListener("click", () => {
  loadWorkout("Upper Body", [
    { url: "https://www.youtube.com/embed/DHQ2U5sWMC4", title: "Push-ups" },
    { url: "https://www.youtube.com/embed/UY6-JzdnHUM", title: "Bicep Curls" },
    { url: "https://www.youtube.com/embed/TDtemhu9PjA", title: "Bench Press" },
  ]);
});

lowerBodyButton.addEventListener("click", () => {
  loadWorkout("Lower Body", [
    { url: "https://www.youtube.com/embed/-wg9g9Uxomg", title: "Squats" },
    { url: "https://www.youtube.com/embed/5DfCBBPgxE0", title: "Bulgarian Split Squats and Multi-directional Lunges" },
    { url: "https://www.youtube.com/embed/Ipi8_vz8_z0", title: "Deadlifts" },
  ]);
});

wholeBodyButton.addEventListener("click", () => {
  loadWorkout("Whole Body", [
    { url: "https://www.youtube.com/embed/Jf5_PJCFs-g", title: "Push-ups" },
    { url: "https://www.youtube.com/embed/EsxpZcApZDs", title: "Squats" },
    { url: "https://www.youtube.com/embed/XeErfmGSwfE", title: "Pull-ups" },
    { url: "https://www.youtube.com/embed/VL5Ab0T07e4", title: "Deadlifts" },
    { url: "https://www.youtube.com/embed/nzwU9RR6l2w", title: "Bicep Curls" },
    { url: "https://www.youtube.com/embed/P5egxkKq5ew", title: "Lunges" },
    { url: "https://www.youtube.com/embed/jCF-ioHh0Dg", title: "Bench Press" },
  ]);
});

// 200ms delay before removing the hidden class to trigger the opacity 
// transition animation.


// I defined a loadWorkout function that takes a title string and an array of videos, 
// where each video is an object with a url and title property. This function is
// used to load the appropriate workout when a button is clicked.