
    let pmt = []
    let principal = []

    const calculate = (e) => {
      e.preventDefault();
      let math = {
        amount: document.getElementById('amount').value,
        time: document.getElementById('time').value,
        interest: document.getElementById('interest').value
      }

      // info.push(math);

      document.querySelector('.invested').insertAdjacentHTML('afterend', `<h2>${(math.amount * math.time).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) }</h2>`)
      document.querySelector('.interest').insertAdjacentHTML('afterend', `<h2>${((math.amount * ((1 + math.interest / 100) ** math.time - 1) / (math.interest / 100) * (1 + math.interest / 100)) - (math.amount * math.time)).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) }</h2>`)
      document.querySelector('.total').insertAdjacentHTML('afterend', `<h2>${(math.amount * ((1 + math.interest / 100) ** math.time - 1) / (math.interest / 100) * (1 + math.interest / 100)).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</h2>`)
      //   // FV Annuity 0 https://www.investopedia.com/terms/f/future-value-annuity.asp
      for (let i = 1; i <= math.time; i++) {
        principal.push((math.amount * i).toFixed(2))
        pmt.push((math.amount * ((1 + math.interest / 100) ** i - 1) / (math.interest / 100) * (1 + math.interest / 100)).toFixed(2))

      }
      console.log(principal);
      console.log(pmt);

      new Chart("myChart", {
        type: "line",
        data: {
          labels: 'data1',
          datasets: [{
            data: pmt,
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.1)",
          },
          {
            data: principal,
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.1)",
          }
        ]
        },
        options: {
          scales: {
          y: {
            beginAtZero: true
          }
        }
        }

      });


      document.querySelector('form').reset()
    }

    document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('btn').addEventListener('click', calculate)

    })
