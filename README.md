## ****Analog Watch Project****

**Overview**  
This project is a fully functional **Analog Watch** built using HTML, CSS, and JavaScript. The watch dynamically displays the current time with moving hour, minute, and second hands.  

**Features**  
- Real-time display of the current time.  
- Smooth movement of the second, minute, and hour hands.  
- Aesthetic and responsive design suitable for various screen sizes.  

**Technologies Used**  
- **HTML**: Structure of the watch interface.  
- **CSS**: Styling for the watch design, including the face and hands.  
- **JavaScript**: Logic for dynamically updating the watch hands based on the current time.  

**How to Run the Project**  
1. Clone the repository or download the source files.  
   ```bash  
   git clone <repository-link>  

cd analog-watch  <br>
analog-watch/  
├── index.html         # Main HTML file  
├── styles.css         # Styling for the watch  
├── script.js          # JavaScript logic for the watch  
└── README.md          # Project documentation  

**How it works**  
- The watch face is created using HTML and styled with CSS to give it an analog look.  
- JavaScript calculates the current time using the `Date` object.  
- The rotation of the watch hands is dynamically adjusted based on the time:  
   - **Hour hand**: Rotates 30° per hour.  
   - **Minute hand**: Rotates 6° per minute.  
   - **Second hand**: Rotates 6° per second.

