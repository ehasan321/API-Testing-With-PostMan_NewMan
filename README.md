#  DMoney API Testing With PostMan_NewMan 

This project showcases a hands-on exploration of an MFS-based API, designed to function much like a mobile banking platform. It enables users to perform a wide range of financial operations, and my goal was to evaluate every aspect of its behavior.

I began by conducting thorough manual testing, covering all core features and user flows. From there, I developed a complete set of test cases to ensure each component of the API was validated against both expected functionality and edge-case scenarios.

Once the manual groundwork was complete, I implemented automated assertions to streamline the verification process and enhance reliability. To wrap up the workflow, I generated a detailed execution report using Newman, providing clear insights into the overall stability and performance of the API.


## Scenario Overview
The following scenario covers both positive and negative test cases for DMoney transaction flow involving an Admin, Agent, Customers, and Merchant.

(1) Admin Setup: Admin creates:
- One Agent
- One Merchant
- Two Customers (Customer A and Customer B)

(2)	System to Agent Transaction
-	Deposit funds from the SYSTEM account to the Agent account.

(3)	Agent to Customer Transaction
-	Agent deposits money to Customer A.

(4)	Agent Balance Verification
- Check the Agent’s balance after the deposit to Customer A.

(5)	Customer-to-Customer Transfer
-	Transfer money from Customer A to Customer B.

(6)	Customer to Agent Withdrawal
-	Withdraw money from Customer A to the Agent.

(7)	Customer Balance & Statement Validation
-	Customer A check Current balance
-	Transaction statement using transaction ID (trnxId)

(8)	Customer to Merchant Payment
-	Customer B makes a payment to the Merchant.

(9)	Second Customer Verification
-	Customer B checks Updated balance
-	Transaction statement

(10)	Merchant Balance Verification
-	Merchant checks and verifies the updated balance.








## How to run this project?

**Prerequisites:**

- `Node.js` (LTS recommended)
- `npm` (bundled with Node)
- A Postman `API key / secret required` by the collection (set via environment)

**Quick start:**
- Clone this project: `git clone git@github.com:ehasan321/API-Testing-With-PostMan_NewMan.git`
- Then run the follwing command 

```bash
  npm install
  npm run report.js
```

## Tools/Tech
- Node.js
- Postman
- Newman
- HTML Report Extra




## Video record of Entire Testing

[<img src="https://drive.google.com/uc?export=view&id=1GYWwgX1bJgbiX7T6-yNBCmzhwE_60sbd" width="700">](https://drive.google.com/file/d/1krg-HPwkp1G93Q3C8BlS0krxB6rSsoF7/view?usp=drive_link)


## All Report
- [Test Cases](https://docs.google.com/spreadsheets/d/11cN7xHoyghwZqtFbqIjHYnZjBpByFJ1W/edit?usp=sharing&ouid=101565862462830262138&rtpof=true&sd=true)

- [Bug & Improvement Report](https://docs.google.com/spreadsheets/d/1JhzNF2ZpGeZY9yc7cLacG37XA2jI_6vJ/edit?usp=sharing&ouid=101565862462830262138&rtpof=true&sd=true)

- [API Documentation](https://documenter.getpostman.com/view/23316531/2sB3dPSqKR)

- [Newman Report](https://drive.google.com/file/d/171zCcdBzVEJrcQVLmctKX2ykKwNOI97W/view?usp=drive_link)


- **Screenshot of Newman Report** <br>
![newmal CLI](https://drive.google.com/uc?export=view&id=14Kha9RsLUn6rx6Ucv92M2GZVURT1fIrm)
![html Generated report](https://drive.google.com/uc?export=view&id=1_sL6MT3aI9zDkO8HlNf5uK0eecUb62m8)


---

## Contributing:
Improve or extend the Postman collection, add environment examples, and update report.js or package.json scripts if needed.


Author: _@HASAN_
