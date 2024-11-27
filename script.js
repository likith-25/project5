const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.content');
    
        tabs.forEach(tab => {
          tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
    
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
          });
        });








        const container = document.querySelector('.carousel-container');
const leftButton = document.querySelector('.carousel-btn.left');
const rightButton = document.querySelector('.carousel-btn.right');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20; // Includes gap

// Clone cards for infinite looping
cards.forEach((card) => {
  const cloneStart = card.cloneNode(true);
  const cloneEnd = card.cloneNode(true);
  container.appendChild(cloneEnd);
  container.insertBefore(cloneStart, container.firstChild);
});

// Set initial position
const totalCards = cards.length;
currentIndex = totalCards;
container.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

// Move carousel
function moveCarousel(direction) {
  if (direction === 'left') currentIndex--;
  else currentIndex++;

  container.style.transition = 'transform 0.4s ease';
  container.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

  container.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
      currentIndex = totalCards;
      container.style.transition = 'none';
      container.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    } else if (currentIndex === totalCards * 2) {
      currentIndex = totalCards;
      container.style.transition = 'none';
      container.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }
  });
}

// Event listeners
leftButton.addEventListener('click', () => moveCarousel('left'));
rightButton.addEventListener('click', () => moveCarousel('right'));










const tabButtons = document.querySelectorAll('.tab2');
const table = document.querySelector('table');

// Define the content for each tab
const tabContent = {
  General: [
    {
      question: "What Is A Small Business Loan?",
      answer: "Small business loans are a category of loans and financial products a lender might provide to a small business.",
    },
    {
      question: "Can I Get A Business Loan With Bad Credit?",
      answer: "It is possible to get certain types of business financing with a lower credit score. Some business cash advance lenders.",
    },
  ],
  Payment: [
    {
      question: "How Do I Make Loan Payments?",
      answer: "You can make payments through your bank’s online portal, direct debit, or physical bank branches.",
    },
    {
      question: "Are There Penalties For Late Payments?",
      answer: "Yes, late payments may incur penalties as per the loan agreement.",
    },
  ],
  Transaction: [
    {
      question: "How Do I Track My Transactions?",
      answer: "You can track transactions through your account dashboard or mobile banking app.",
    },
    {
      question: "What Are Transaction Fees?",
      answer: "Transaction fees are charges applied for processing payments or transfers.",
    },
  ],
  Security: [
    {
      question: "Is My Data Secure?",
      answer: "Yes, your data is encrypted and protected under strict security protocols.",
    },
    {
      question: "What Should I Do If I Suspect Fraud?",
      answer: "Immediately report any suspicious activity to customer support or your bank’s fraud prevention department.",
    },
  ],
  Loan: [
    {
      question: "How Do Business Loans Work?",
      answer: "Business loans provide funds upfront, which you repay with interest over a set term.",
    },
    {
      question: "What Is The Difference Between Secured And Unsecured Loans?",
      answer: "Secured loans require collateral, while unsecured loans do not.",
    },
  ],
};

// Function to populate the table with content based on the active tab
function updateTable(tab) {
  // Clear existing rows
  table.innerHTML = '';

  // Get the content for the selected tab
  const content = tabContent[tab];

  // Populate the table with rows
  content.forEach((item, index) => {
    if (index % 2 === 0) {
      // Create a new row for every two questions
      const row = table.insertRow();
      row.innerHTML = `
        <td>
          <h3>${item.question}</h3>
          <p>${item.answer}</p>
        </td>
      `;
    } else {
      // Add the second question to the current row
      const row = table.rows[table.rows.length - 1];
      const cell = row.insertCell();
      cell.innerHTML = `
        <h3>${item.question}</h3>
        <p>${item.answer}</p>
      `;
    }
  });
}

// Add click event listeners to each tab button
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Highlight the active tab
    tabButtons.forEach((btn) => btn.classList.remove('active-tab'));
    button.classList.add('active-tab');

    // Update the table based on the selected tab
    const selectedTab = button.getAttribute('data-tab');
    updateTable(selectedTab);
  });
});

// Initialize the table with the "General" tab content
document.querySelector('.tab2[data-tab="General"]').click();