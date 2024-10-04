const body = document.querySelector("body");
const container = document.querySelector(".container");
const arr = [
  { name: "Sophia", no: "7335", department: "Economics" },
  { name: "David", no: "4326", department: "History" },
  { name: "David", no: "6222", department: "Chemistry" },
  { name: "David", no: "6550", department: "History" },
  { name: "David", no: "5191", department: "Biology" },
  { name: "Emily", no: "6008", department: "Physics" },
  { name: "David", no: "1204", department: "Philosophy" },
  { name: "Emily", no: "5831", department: "History" },
  { name: "Bob", no: "3078", department: "Psychology" },
  { name: "David", no: "8382", department: "Mathematics" },
  { name: "Emily", no: "5481", department: "Mathematics" },
  { name: "David", no: "6289", department: "Engineering" },
  { name: "Emily", no: "3920", department: "Psychology" },
  { name: "Daniel", no: "6072", department: "Engineering" },
  { name: "Sophia", no: "8423", department: "Mathematics" },
  { name: "Sophia", no: "4895", department: "Computer Science" },
  { name: "Sarah", no: "7879", department: "Physics" },
  { name: "Michael", no: "4474", department: "Philosophy" },
  { name: "Sophia", no: "9543", department: "Economics" },
  { name: "Alice", no: "6437", department: "Physics" },
  { name: "Sophia", no: "4956", department: "Physics" },
  { name: "John", no: "4872", department: "History" },
  { name: "Alice", no: "4983", department: "History" },
  { name: "Daniel", no: "7303", department: "Mathematics" },
  { name: "Michael", no: "9932", department: "Physics" },
  { name: "Sophia", no: "5819", department: "Computer Science" },
  { name: "Emily", no: "4643", department: "History" },
  { name: "Michael", no: "7610", department: "History" },
  { name: "Chris", no: "3812", department: "History" },
  { name: "Chris", no: "7810", department: "History" },
  { name: "John", no: "3951", department: "Physics" },
  { name: "Michael", no: "1923", department: "Philosophy" },
  { name: "John", no: "6370", department: "Biology" },
  { name: "Chris", no: "6709", department: "Economics" },
  { name: "Sophia", no: "8172", department: "Engineering" },
  { name: "Daniel", no: "9013", department: "Physics" },
  { name: "John", no: "1125", department: "Engineering" },
  { name: "John", no: "1093", department: "Mathematics" },
  { name: "Bob", no: "8823", department: "Mathematics" },
  { name: "David", no: "5817", department: "Psychology" },
  { name: "Alice", no: "1101", department: "Engineering" },
  { name: "Daniel", no: "8723", department: "Chemistry" },
  { name: "Emily", no: "3325", department: "Computer Science" },
  { name: "John", no: "5565", department: "Biology" },
  { name: "John", no: "3419", department: "Chemistry" },
  { name: "David", no: "8995", department: "Chemistry" },
  { name: "Bob", no: "1035", department: "Philosophy" },
  { name: "John", no: "3267", department: "Economics" },
  { name: "Michael", no: "6468", department: "History" },
  { name: "Sarah", no: "5805", department: "History" },
  { name: "David", no: "6671", department: "Mathematics" },
  { name: "Michael", no: "2753", department: "Physics" },
  { name: "Sarah", no: "4608", department: "Economics" },
  { name: "Sarah", no: "6890", department: "Engineering" },
  { name: "Alice", no: "7831", department: "Psychology" },
  { name: "Alice", no: "6485", department: "Chemistry" },
  { name: "Michael", no: "4510", department: "Engineering" },
  { name: "Sophia", no: "1574", department: "Chemistry" },
  { name: "Sophia", no: "3049", department: "Engineering" },
  { name: "Michael", no: "8074", department: "History" },
  { name: "Bob", no: "8141", department: "Philosophy" },
  { name: "Sophia", no: "3097", department: "Psychology" },
  { name: "David", no: "5019", department: "Economics" },
  { name: "Daniel", no: "5569", department: "Psychology" },
  { name: "Daniel", no: "8403", department: "Mathematics" },
  { name: "Chris", no: "8069", department: "Biology" },
  { name: "Sophia", no: "5712", department: "Physics" },
  { name: "Alice", no: "2118", department: "Computer Science" },
];

function students() {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `
    <div class="student-cart">
        <p><strong class="p">Name:</strong>${arr[i].name}</p>
        <p><strong class="p">No:</strong>${arr[i].no}</p>
        <p><strong class="p">Department:</strong>${arr[i].department}</p>
    </div>
        `;
  }
  return str;
}

container.innerHTML = students();
body.appendChild(container);
