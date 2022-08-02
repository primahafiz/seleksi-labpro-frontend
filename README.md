# BNMO (Frontend Side)
BNMO is a Web Application which has bank integration features such as transfer and request money. Not only customer, BNMO is also used by Bank's Admin in order to monitor all transaction by customer. 

## Build By
- Primanda Adyatma Hafiz (13520022)

## How To Run
#### CLI
1. Clone this repository
2. Install npm
3. Run ```npm install``` command inside repository folder
4. Server is started on http://localhost:3000/ and automatically connected to API https://api-bnmo.herokuapp.com/

#### Deployed server
You can access the website on https://bnmo-app.herokuapp.com/

## Design Pattern
1. Design Pattern Composite </br>
Composite pattern is used when an object is consisted of some simpler object and that simpler object is consisted of way simpler object and so on. In this case, I use this pattern to represent Customer object because it consists of multiple transactions that it already did
2. Design Pattern Builder </br>
Builder pattern is used when building complex object using simpler object and using step by step approach. In this case, I use this pattern when building Customer objects by adding request and transfer transactions to them.

## Technologies Used
- react (v13.3.0)
- bootstrapt (v4.4.1)
- font-awesome (v4.7.0)
- axios (v0.7.2)

## How To Use
You can run the server on local with CLI or access deployed server on https://bnmo-app.herokuapp.com/.

## Endpoint
<table>
  <thead>
    <td>Endpoint</td>
    <td>Description</td>
  </thead>
  <tbody>
    <tr>
      <td>/</td>
      <td>Customer Home Page</td
    </tr>
    <tr>
      <td>/login</td>
      <td>Login Page</td
    </tr>
    <tr>
      <td>/register</td>
      <td>Register Page</td
    </tr>
    <tr>
      <td>/request</td>
      <td>Request Form Page</td
    </tr>
    <tr>
      <td>/transfer</td>
      <td>Transfer Form Page</td
    </tr>
    <tr>
      <td>/history</td>
      <td>Transaction History Page</td
    </tr>
    <tr>
      <td>/profile</td>
      <td>Profile Data Page</td
    </tr>
    <tr>
      <td>/admin</td>
      <td>Admin Home Page</td
    </tr>
    <tr>
      <td>/admin/verify-registration</td>
      <td>Admin's Verify Registration Page</td
    </tr>
    <tr>
      <td>/admin/verify-request</td>
      <td>Admin's Verify Request Page</td
    </tr>
    <tr>
      <td>/admin/search</td>
      <td>Admin's Search Customer Page</td
    </tr>
    <tr>
      <td>/admin/profile/:username</td>
      <td>Admin's Search Customer's Profile Result Page</td
    </tr>
</table>
        
## Additional Feature
- Live search customer
- Loading state while fecthing API
