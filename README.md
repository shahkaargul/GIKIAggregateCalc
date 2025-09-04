# GIKI Aggregate Calculator

A clean, responsive, and user-friendly web application to calculate the aggregate score for admission to Ghulam Ishaq Khan Institute (GIKI). This tool helps prospective students estimate their chances based on their Matric/FSc (or equivalent) marks, entry test score, and the specific weightings defined by GIKI.

![GitHub](https://img.shields.io/github/license/shahkaargul/GIKIAggregateCalc) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Live Demo

Use the calculator directly in your browser: [https://shahkaargul.github.io/GIKIAggregateCalc/](https://shahkaargul.github.io/GIKIAggregateCalc/)

## ✨ Features

- **Intuitive Interface:** Simple input fields for Matric, FSc/Intermediate, and Entry Test scores.
- **Dynamic Calculation:** Instantly calculates and displays the aggregate percentage as you type.
- **Official Formula:** Accurately implements the official GIKI aggregate calculation formula:
  - **Matric (SSC/Equivalent):** 10% of total marks
  - **FSc (HSSC/Equivalent):** 40% of total marks
  - **Entry Test (GIKI):** 50% of total marks
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
- **Visual Feedback:** Clean design with a prominent results display.

## 🧮 The Calculation Formula

The aggregate score is calculated using the following formula, standard for most engineering universities in Pakistan:
Aggregate = (Matric_Marks / 1100 * 0.1) + (FSc_Marks / 1100 * 0.4) + (EntryTest_Marks / 100 * 0.5)

The result is then multiplied by 100 to get a percentage.

## 🛠️ Tech Stack

This is a lightweight, front-end only application built with:
- **HTML5:** For the structure of the application.
- **CSS3:** For styling and creating a modern, responsive layout.
- **Vanilla JavaScript:** For the dynamic calculation logic and user interaction.
- **GitHub Pages:** For free and easy hosting.

## 📁 Project Structure
GIKIAggregateCalc/
├── index.html # The main HTML file
├── style.css # Stylesheet for the application's layout and design
├── script.js # JavaScript logic for calculating the aggregate
├── images/ # Folder containing the preview image
│ └── preview.png
└── README.md # Project documentation (this file)


## 🚦 Usage

1. Navigate to the [Live Demo](https://shahkaargul.github.io/GIKIAggregateCalc/) page.
2. Enter your marks in the respective input fields:
   - **Matric Marks:** Out of 1100 (or equivalent for other boards).
   - **FSc/Intermediate Marks:** Out of 1100.
   - **Entry Test Score:** Out of 100 (as provided by GIKI).
3. Your aggregate percentage will be **calculated automatically and displayed instantly** below the inputs.

## 🔮 Future Enhancements

Ideas for improving the calculator:
- [ ] **Save Results:** Allow users to save or share their calculated aggregate.
- [ ] **Program-specific Info:** Show historical aggregate cut-offs for different engineering programs at GIKI.
- [ ] **More Calculators:** Include calculators for other universities (e.g., UET, NUST, FAST).
- [ ] **Dark Mode:** Add a toggle for a dark theme.

## 🤝 Contributing

Contributions are always welcome! If you have ideas to improve this calculator, feel free to:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Please ensure the calculation logic aligns with the official formula from GIKI's admission policy.

## 📜 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 👨‍💻 Developer

**Shahkaar Gul**

- GitHub: [@shahkaargul](https://github.com/shahkaargul)
- Project Link: [https://github.com/shahkaargul/GIKIAggregateCalc](https://github.com/shahkaargul/GIKIAggregateCalc)

---

### ⚠️ Disclaimer

This calculator is designed to help students estimate their aggregate score. The results are based on publicly available information regarding the standard formula. **Always refer to the official GIKI admission website for the most accurate and up-to-date criteria.** The developer is not affiliated with GIKI.

---

⭐️ Found this tool helpful? Give this repo a star to show your support!
