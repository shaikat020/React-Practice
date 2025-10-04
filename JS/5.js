// a) array destructuring (go minimum up to 5 depths)

const arr = [10, 20, 30, [40, 50,[60,70,80, [100, 200, 180, [50, 70,[10,20]]]]]];// 6 depth

const [a, b, c, [d, e, [f, g, h, [i, j, k, [l, m, [o, p]]]]]]= arr;

console.log(a,b,c,d,e,f,g,h,i,j,k,l,m,o,p);

//b) object destructuring (go minimum up to 5 depths)

const obj={
    web :{
        frontend : {
            technology : {
                raw: "HTML, CSS, JS",
                framework : {
                    react : {
                        component : "vite"
                    }
                }
            }
        }

    }
}

const {
    web :{
        frontend : {
            technology : {
                raw,
                framework :{
                    react :{
                        component
                    }
                } 
            }
        }
    }
} = obj;

console.log("Raw frontend are : ", raw , "\nReact component is : ", component);

// c) combination of array + object and object + array destructuring (go minimum up to 5 depths)

const data = {
  developers: [
    {
      name: "Shaikat",
      skills: {
        frontend: [
          {
            tech: {
              base: ["HTML", "CSS", "JavaScript"],
              framework: {
                react: {
                  buildTool: ["Vite", "node"]
                }
              }
            }
          }
        ]
      }
    }
  ]
};

// Destructuring (array + object mix, 5 depths)
const {
  developers: [
    {
      skills: {
        frontend: [
          {
            tech: {
              base: [lang1, lang2, lang3],
              framework: {
                react: {
                  buildTool: [tool1, tool2],
                },
              },
            },
          },
        ],
      },
    },
  ],
} = data;

console.log("Base Languages are:", lang1, lang2, lang3);
console.log("React Build Tools are:", tool1, "and", tool2);
