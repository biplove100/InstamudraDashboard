# 💳 Transaction Management Web App

A secure, role-based transaction tracking web application built with the **MERN stack** (MongoDB, Express, Node.js, EJS, and Mongoose). This system allows admins and employees to log, verify, and manage financial transactions, featuring card validation, dynamic fee calculation, filtering, and access control.

## 🚀 Features

- 🔐 **Authentication & Authorization**  
  Secure login system using `passport-local-mongoose` with role-based access (`admin` & `employee`).

- 📄 **Transaction Recording**  
  Users can create, view, and manage transactions with fields like card number, expiry, bank, amount, and card type.

- ✅ **Verification System**  
  Each transaction can be verified by a different user; once verified, it displays "Verified by USERNAME".

- 📊 **Dynamic Fee Calculation**  
  Fees are automatically calculated based on card type (e.g., AMEX: 4.0%).

- 🗂 **Month Filtering & Dashboard**  
  Transactions can be filtered by month for easy tracking.

- 🧾 **Two Dashboards**  
  Designed to handle multiple agents simultaneously with separate dashboards.

- 🛡️ **Admin-only Delete Access**  
  Delete functionality is restricted to `admin` users only.

---

## 📁 Folder Structure

```
├── app.js                  # Main server file
├── middleware.js           # Authentication middleware
├── .env                    # Environment variables
├── package.json            # Project metadata & dependencies
├── models/
│   ├── TransactionSchema.js   # Transaction Schema definition
│   ├── TransactionModel.js    # Transaction Mongoose Model
│   └── user.js                # User schema with passport-local auth
└── views/
    └── index.ejs          # Main dashboard view
```

---

## ⚙️ Technologies Used

- **Frontend**: EJS, Bootstrap
- **Backend**: Express.js, Node.js
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport.js (Local Strategy)
- **Utilities**: dotenv, method-override, moment.js

---

## 🛠 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/transaction-app.git
   cd transaction-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**

   Create a `.env` file in the root and include:
   ```
   DB_URL=mongodb://localhost:27017/your-db-name
   SECRET=yourSecretKey
   PORT=3000
   ```

4. **Run the Server**
   ```bash
   node app.js
   ```

5. **Visit in Browser**
   ```
   http://localhost:3000
   ```

---

## ✅ To-Do

- [x] Schema updates with card number & AMEX fees
- [x] Verification button & "verified by" display
- [x] Monthly filtering
- [x] Separate dashboards for 2 agents
- [ ] Export transaction report as CSV/PDF (upcoming)
- [ ] Add sorting by amount/date (planned)

---

## 📧 Contact

Created by [Biplove Kumar Singh](mailto:biplovesinghrajpute.bsr1@gmail.com)  
📞 +91 7766940538  
🔗 [GitHub](https://github.com/biplove100)

---
