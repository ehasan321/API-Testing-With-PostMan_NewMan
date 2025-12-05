#  DMoney API Testing With PostMan_NewMan

This project showcases a hands-on exploration of an MFS-based API, designed to function much like a mobile banking platform. It enables users to perform a wide range of financial operations, and my goal was to evaluate every aspect of its behavior.

I began by conducting thorough manual testing, covering all core features and user flows. From there, I developed a complete set of test cases to ensure each component of the API was validated against both expected functionality and edge-case scenarios.

Once the manual groundwork was complete, I implemented automated assertions to streamline the verification process and enhance reliability. To wrap up the workflow, I generated a detailed execution report using Newman, providing clear insights into the overall stability and performance of the API.


## Positive & Negative case are created based on follwing Scenraio:

1. Admin creates an Agent, two random Customers, and a Merchant
2. Deposit money from the SYSTEM account to the Agent
3. Agent deposits money to a Customer
4. Check the Agent’s balance
5. Send money from one Customer to another
6. Withdraw money from a Customer to the Agent
7. Check Customer balance and transaction statement by trnxId
8. Make a payment from the second Customer to the Merchant
9. Second Customer checks balance and transaction statement
10. Merchant checks balance




## How to run this project?

- Clone this project
- Then run the follwing command 

```bash
  npm i
  npm run report.js
```
## Tools Used
- Postman
- Newman



## All Report
- [Test Cases](https://docs.google.com/spreadsheets/d/11cN7xHoyghwZqtFbqIjHYnZjBpByFJ1W/edit?usp=sharing&ouid=101565862462830262138&rtpof=true&sd=true)

- [Bug & Improvement Report](https://docs.google.com/spreadsheets/d/1JhzNF2ZpGeZY9yc7cLacG37XA2jI_6vJ/edit?usp=sharing&ouid=101565862462830262138&rtpof=true&sd=true)


- [API Documentation](https://documenter.getpostman.com/view/23316531/2sB3dPSqKR)


- [Newman Report // cannot export for PC issue]()


### Screenshot of Newman Report
![image]()

![image]()



