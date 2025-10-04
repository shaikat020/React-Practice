# 🧑‍💻 JavaScript & React Practice Tasks — Session Recap

### 📅 Session: Yesterday’s Class  
### 👨‍🎓 Course: Web Development / JavaScript & React Practice  
### 📘 Objective: Understand key JavaScript concepts and apply them through a simple React voting application.

---

## 🧩 1. Difference Between `var`, `let`, and `const`

| Keyword | Scope | Re-declaration | Re-assignment | Hoisting | Common Use |
|----------|--------|----------------|----------------|-----------|-------------|
| **var** | Function-scoped | ✅ Allowed | ✅ Allowed | ✅ Hoisted (initialized with `undefined`) | Legacy JS code |
| **let** | Block-scoped | ❌ Not allowed | ✅ Allowed | ✅ Hoisted (not initialized — Temporal Dead Zone) | Mutable variables |
| **const** | Block-scoped | ❌ Not allowed | ❌ Not allowed | ✅ Hoisted (not initialized — Temporal Dead Zone) | Constants, fixed values |

📖 **Reference:** [GeeksforGeeks - Difference between var, let, and const](https://www.geeksforgeeks.org/javascript/difference-between-var-let-and-const-keywords-in-javascript/)

---

## 🧮 2. Array Reference vs Copy

**Concept Summary:**
- Assigning one array to another (e.g., `arr2 = arr1`) creates a **reference**, not a new array.
- Using methods like **spread (`...`)** or **`slice()`** creates a **copy**, keeping the original intact.

---

## ⚙️ 3. Functions & Rest Parameters

**Objective:**
- Learn to handle an **unknown number of arguments** in a function using `...rest`.
- Perform **sum**, **multiplication**, and **subtraction** on all given arguments.

**Requirements:**
- Implement using both:
  - Normal function syntax  
  - Arrow function syntax

---

## 🧱 4. Object Literals & Spread Operator

**Concept Summary:**
- Object literals define objects with key-value pairs.  
- The **spread operator (`...`)** copies or merges properties from one object to another.  
- It’s useful for creating **shallow copies** or combining multiple objects.

---

## 🧩 5. Destructuring (Deep Levels)

**Goal:** Extract values from nested arrays and objects easily.

- **Array Destructuring:** Go at least **5 levels deep**.
- **Object Destructuring:** Go at least **5 levels deep**.
- **Combination:** Use a **mix of array and object destructuring** up to **5 nested levels**.

**Example Concepts Covered:**
- Nested arrays: `[a, [b, [c]]]`
- Nested objects: `{ level1: { level2: { ... }}}`
- Mix of arrays and objects for complex data access.

---

## ⚡ 6. IIFE (Immediately Invoked Function Expression)

**Concept Summary:**
- An **IIFE** runs **immediately** after it’s defined.
- Commonly used for **encapsulation** and avoiding global scope pollution.

**Requirements:**
1. Create a **normal function IIFE**.
2. Create an **arrow function IIFE**.

---

## ⚛️ 7. React Project — *University Election 2025 Voting App*

### 🎯 Objective:
Build a **functional voting application** using React concepts:
- `useState` → to track age, eligibility, and votes  
- `Events` → to handle input and button clicks  
- `Conditional Rendering` → to show eligibility and voting results dynamically  

---

### 🏗️ Requirements

#### **1. Voter Input**
- Provide an input field where a voter can enter their **age**.
- Add a **Submit** button to confirm.

#### **2. Eligibility Check**
- If **age < 18** → display:  
  `"Sorry, you are not eligible to vote."`
- If **age ≥ 18** → display:  
  `"Welcome! You are eligible to vote."`

#### **3. Vote Casting**
- When eligible, show two buttons:
  - **Vote for Candidate A**
  - **Vote for Candidate B**
- Clicking a button should **increment** that candidate’s vote count.

#### **4. Result Display**
Display current vote totals:
Candidate A: X votes
Candidate B: Y votes
