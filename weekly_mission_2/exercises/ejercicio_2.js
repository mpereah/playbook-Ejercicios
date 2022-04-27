const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ];
explorers.forEach(explorer => console.log(explorer.name))
explorers.forEach(stac => console.log(stac.stack))

// const newList = explorers.map((valor) => valor)
// console.log(newList)

// const explorersWithJs = explorers.filter((list) => list.includes ('js'))
// console.log("Explorer con stack: " + explorersWithJs)

// const cdmx = explorers.find((ciudad) => ciudad.city = 'CDMX')
// console.log("Primer explorer de: " + cdmx.name)

// const ejerciciosCompletos = explorers.reduce((ejercicios, explore) => {
//   ejercicios[explore = exercises_completed]
//   return ejercicios
// })
// console.log(ejerciciosCompletos)


const validacion = explorers.some((exercisesFinished) => exercisesFinished === true)
console.log("Ejercicios Finalizados: " + validacion )


// const propiedadFinish = explorers.every((onbord) => )






  