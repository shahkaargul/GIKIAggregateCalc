document.addEventListener("DOMContentLoaded", () => {
  const programSelect = document.getElementById("program");
  const fscGroup = document.getElementById("fscGroup");
  const calculateBtn = document.getElementById("calculateBtn");
  const printBtn = document.getElementById("printBtn");
  const result = document.getElementById("result");
  const recommendationsDiv = document.getElementById("recommendations");

  const departments = [
    { name: "Computer Science", cutoff: 94.6 },
    { name: "Artificial Intelligence", cutoff: 91.68 },
    { name: "Software Engineering", cutoff: 90.57 },
    { name: "Cyber Security", cutoff: 84.03 },
    { name: "Data Science", cutoff: 83.2 },
    { name: "Computer Engineering", cutoff: 81.65 },
    { name: "Mechanical Engineering", cutoff: 76.43 },
    { name: "Electrical Engineering", cutoff: 67.9 },
    { name: "Civil Engineering", cutoff: 62.42 },
    { name: "Chemical Engineering", cutoff: 58.58 },
    { name: "Engineering Sciences", cutoff: 58.05 },
    { name: "Materials Engineering", cutoff: 53.03 }
  ];

  function toggleFields() {
    if (programSelect.value === "engineering") {
      fscGroup.classList.remove("hidden");
    } else {
      fscGroup.classList.add("hidden");
    }
    result.innerHTML = "";
    recommendationsDiv.innerHTML = "";
  }

  function calculateAggregate() {
    const program = programSelect.value;
    const test = parseFloat(document.getElementById("test").value);
    const ssc = parseFloat(document.getElementById("ssc").value);
    const fsc = parseFloat(document.getElementById("fsc").value);

    if (isNaN(test) || isNaN(ssc) || (program === "engineering" && isNaN(fsc))) {
      result.innerHTML = "⚠️ Please enter all required fields!";
      recommendationsDiv.innerHTML = "";
      return;
    }

    let aggregate = 0;
    if (program === "engineering") {
      aggregate = (test * 0.70) + (ssc * 0.15) + (fsc * 0.15);
    } else {
      aggregate = (test * 0.85) + (ssc * 0.15);
    }

    let meritNumber = null;

    if (program === "engineering") {
      meritNumber = Math.round((1 - (aggregate / 100)) * 6000);
      result.innerHTML = `🎯 Your GIKI Engineering Aggregate:<br><span>${aggregate.toFixed(2)}%</span><br>📊 Estimated Merit Position: <b>#${meritNumber}</b>`;

      const eligibleDepartments = departments
        .filter(dept => aggregate >= dept.cutoff)
        .sort((a, b) => a.cutoff - b.cutoff);

      if (eligibleDepartments.length > 0) {
        recommendationsDiv.innerHTML = `
          <h3>✅ Higher Chances In:</h3>
          <ul>
            ${eligibleDepartments.map(d => `<li>${d.name} (Cutoff: ${d.cutoff}%)</li>`).join("")}
          </ul>
        `;
      } else {
        recommendationsDiv.innerHTML = `<h3>⚠️ No department cleared based on last year’s merit list.</h3>`;
      }

    } else {
      meritNumber = Math.round((1 - (aggregate / 100)) * 3000);
      result.innerHTML = `📚 Your GIKI Management Sciences Aggregate:<br><span>${aggregate.toFixed(2)}%</span><br>📊 Estimated Merit Position: <b>#${meritNumber}</b>`;

      if (aggregate >= 56.25) {
        recommendationsDiv.innerHTML = `<h3>✅ High Chance of Admission in Management Sciences!</h3>`;
      } else {
        recommendationsDiv.innerHTML = `<h3>⚠️ Low Chance of Admission in Management Sciences.</h3>`;
      }
    }
  }

  function printResult() {
    window.print();
  }

  programSelect.addEventListener("change", toggleFields);
  calculateBtn.addEventListener("click", calculateAggregate);
  printBtn.addEventListener("click", printResult);
  toggleFields(); // on load
});
