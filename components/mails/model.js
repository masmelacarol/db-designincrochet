const URL = 'http://localhost:4200/home';
const getHtml = (products, user, total) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          :root {
            --bg-main: #d1d1e9;
            --bg-color-secondary: #6246ea;
            --swiper-theme-color: rgba(255, 216, 3, 1);
            --bg-white: #fff;
            --color: #2b2c34;
            --pd: 20px;
            --mg: 30px;
            --font-main: 'Red Hat Display', sans-serif;
            --font-title: 'Playball', cursive;
          }
          * {
            font-family: var(--font-main);
            margin: 0;
            padding: 0;
          }
    
          body {
            padding: 20px;
          }
    
          a {
            text-decoration: none;
            color: var(--color);
          }
          a:hover {
            color: var(--color);
            text-decoration: underline;
          }
    
          h1,
          h4,
          h6 {
            font-family: var(--font-title);
          }
    
          h1 {
            font-size: 36px;
            line-height: 48px;
          }
    
          h4 {
            font-size: 24px;
            line-height: 25px;
          }
    
          h6,
          p {
            font-size: 16px;
          }
          p,
          a,
          input,
          label,
          legend,
          span,
          td,
          th {
            font-size: 14px;
            margin: 0;
            background: transparent;
          }
    
          header {
            display: flex;
            justify-content: space-between;
          }
    
          section {
            padding: 10px;
            margin: 10px;
          }
          section .users {
            border: 1px solid var(--bg-main);
            border-radius: 10px;
            width: 30%;
            padding: 10px;
            margin: 10px;
          }
    
          section .users .item {
            display: flex;
            justify-content: space-between;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          td,
          th {
            padding: var(--pd);
          }
    
          thead {
            background-color: var(--bg-main);
          }
          thead th:first-child {
            border-top-left-radius: 20px;
          }
    
          thead th:last-child {
            border-top-right-radius: 20px;
          }
    
          tbody {
            text-align: center;
            border-bottom: 0.5px solid #c4c4c4;
          }
          tbody td {
            border-left: 0.5px solid #c4c4c4;
          }
          tbody td:last-child {
            border-right: 0.5px solid #c4c4c4;
          }

          table tbody tr:nth-of-type(2n) {
            display:none !important;           
          }
          tbody td .count {
            background: #e7e7ec;
            border-radius: 10px;
            height: 100%;
            display: grid;
            grid-template-columns: 65% 35%;
            align-items: center;
            justify-content: center;
            width: 50%;
            margin: auto;
          }
          @media only screen and (max-width: 760px) {
            tbody td .count {
              width: 20%;
            }
          }
    
          p {
            text-align: center;
            padding: 0 10px;
          }
    
          .cart__btns {
            display: flex;
            flex-direction: column;
            background: var(--bg-main);
            border-radius: 0px 10px 10px 0px;
            align-items: center;
          }
          button {
            color: white;
            padding: 0;
            font-family: var(--font-main);
            padding: 10px var(--pd);
            color: var(--bg-white);
            border: none;
            outline: none;
            font-size: 16px;
            line-height: 21px;
            background: transparent;
            outline: none;
            cursor: pointer;
            transition: all 0.5s;
          }
    
          .add {
            transform: rotate(180deg);
            padding: 0;
          }
    
          figure {
            margin: auto;
          }

          .total {
            margin: 10px;
            display:flex;
            justify-content: flex-end; 
            align-items: center;
            flex-wrap: wrap;
          }
          .total p {
            margin-left: 10px;
          }

          
          @media only screen and (max-width: 768px) {
            table,
            thead,
            tbody,
            th,
            td,
            tr {
              display: block;
            }
    
            /* Hide table headers (but not display: none;, for accessibility) */
            thead tr {
              position: absolute;
              top: -9999px;
              left: -9999px;
            }
    
            tr {
              margin: 0 0 1rem 0;
            }
    
            td {
              /* Behave  like a "row" */
              border: none;
              position: relative;
              padding-left: 50%;
              max-width: 100%;
            }
    
            tbody {
              border: none;
              text-align: end;
            }
            tbody tr {
              border: 0.5px solid #c4c4c4;
              border-radius: 20px;
            }
    
            td:before {
              position: absolute;
              top: 20px;
              left: 0px;
              width: 32%;
              padding-right: 10px;
              white-space: nowrap;
              font-weight: 700;
            }
    
            td:nth-of-type(1):before {
              content: '';
            }
    
            td:nth-of-type(2):before {
              content: 'Producto';
            }
    
            td:nth-of-type(3):before {
              content: 'Talla';
            }
    
            td:nth-of-type(4):before {
              content: 'Precio';
            }
    
            td:nth-of-type(5):before {
              content: 'Cantidad';
            }
    
            td:nth-of-type(6):before {
              content: 'Subtotal';
            }
          }
    
          @media only screen and (max-width: 340px) {
            table {
              font-size: small;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Design in Crochet</h1>
          <nav>
            <ul>
              <li>
                <a href="http://localhost:4200/home" target="_blank">
                  Ir al homepage
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <h4>Datos del usuario</h4>
          <div class="users">
            <div class="item">
              <h6>Nombre:</h6>
              <p>${user.name}</p>
            </div>
            <div class="item">
              <h6>Email:</h6>
              <p>${user.email}</p>
            </div>
            <div class="item">
              <h6>Dirección:</h6>
              <p>${user.address}</p>
            </div>
            <div class="item">
              <h6>Ciudad:</h6>
              <p>${user.city}</p>
            </div>
            <div class="item">
              <h6>Teléfono:</h6>
              <p>${user.phoneNumber}</p>
            </div>
          </div>
        </section>
        <main>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Talla</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${products.map((product) => {
                return `
              <tr>
                <td><a href="${URL}" target="_blank">Design in Crochet</a></td>
                <td>${product.name}</td>
                <td>${product.size}</td>
                <td>${product.price}</td>
                <td>
                  <div class="count">
                    <p>${product.count}</p>
                  </div>
                </td>
                <td>${product.price * product.count}</td>
              </tr>
              `;
              })}
            </tbody>
          </table>
          <div class="total">
              <h6>Total: </h6>
              <p>$${total}</p>
          </div>
        </main>
      </body>
    </html>
    `;
};

module.exports = {
  getHtml,
};
