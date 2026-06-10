export async function vinos() {
  try {
    const res = await fetch("url/=${id, nombre}", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        vino_id: id,
        nombre: nombre,
      }),
    });
    const resJson = res.json();

    if (res.status !== 200) {
      clg("Errorcisimo");
    } else {
      clg("god");
    }
  } catch (error) {
    clg("Errorsote");
  }
}

export async function proveedores() {
  try {
    const res = await fetch("url/=${id, nombre}", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        proveedor_id: id,
        nombre: nombre,
      }),
    });
    const resJson = res.json();

    if (res.status !== 200) {
      clg("Errorcisimo");
    } else {
      clg("god");
    }
  } catch (error) {
    clg("Errorsote");
  }
}

export const search = async (c1, e1, c2, e2) => {
  try {
    const res = await fetch(
      `localhost:8000/buscar?clase1=${c1}+clase2=${c2}+termino1=${e1}+termino2=${e2}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      },
    );
  } catch (e) {}
};

/*

    export default function search(c1, e1, c2, e2){
        if (c1=="vino"){
        
        const res = await fetch("url/=${id, nombre}", { para obtener los vinos disponibles
.
        const res = await fetch("url/search?c1:${}+e1", { para obtener las estadísitcas de todos los vinos

        si e2 != '', entonces 
        const res = await fetch("url/=${id, nombre}",{ para obtener estadísticas de este vino 


            if (c3=="vino"){
            
            const res = await fetch("url/=${id, nombre}", { para obtener los vinos disponibles o que ya no lo haga pq segun ya lo tiene xdxdxd
            
            si e4 != '', entonces 

            const res = await fetch("url/=${id, nombre}",{ para obtener estadísticas de AMBOS VINOS, probablemente comparativas

            }else if (c3=='proveedor') {

            const res = await fetch("url/=${id, nombre}", { para obtener los proveedores disponibles
            const res = await fetch("url/=${id, nombre}", { para obtener los stats de ese vino respecto a los proveedores

            si e4 != '', entonces 
            const res = await fetch("url/=${id, nombre}",{ para obtener estadísticas de este proveedor y ese vino 

            }
            }  
        

        }

        }

        if (c1=="proveedor"){
        
        const res = await fetch("url/=${id, nombre}", { para obtener los proveedores disponibles

        const res = await fetch("url/=${id, nombre}", { para obtener las estadísitcas de todos los proveedores

        si e2 != '', entonces 
        const res = await fetch("url/=${id, nombre}",{ para obtener estadísticas de este proveedor

        }

    }

*/
