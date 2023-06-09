//import React from "react"

import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Section from "./Components/Section"

let section_data=[{title:"Skills", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus minima nemo praesentium esse laudantium laboriosam odio dolore nobis cum, quod assumenda expedita dignissimos sapiente magni inventore ad, iste sunt nihil commodi fugit unde? Quo, harum voluptate distinctio quae temporibus ipsa dignissimos, illum perspiciatis perferendis voluptatibus eum veritatis voluptates tempora repudiandae suscipit esse quia delectus non nemo. Ea eum explicabo quo eos? Ut, dolore! Cumque consequuntur, ab delectus debitis asperiores deserunt commodi qui voluptatibus fugiat, atque ducimus quas dolorum eligendi, esse excepturi numquam alias amet! Aliquam sit nemo ullam asperiores reprehenderit ratione iste, nihil culpa blanditiis nobis recusandae libero vel porro?"},
{title:"Experience",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus minima nemo praesentium esse laudantium laboriosam odio dolore nobis cum, quod assumenda expedita dignissimos sapiente magni inventore ad, iste sunt nihil commodi fugit unde? Quo, harum voluptate distinctio quae temporibus ipsa dignissimos, illum perspiciatis perferendis voluptatibus eum veritatis voluptates tempora repudiandae suscipit esse quia delectus non nemo. Ea eum explicabo quo eos? Ut, dolore! Cumque consequuntur, ab delectus debitis asperiores deserunt commodi qui voluptatibus fugiat, atque ducimus quas dolorum eligendi, esse excepturi numquam alias amet! Aliquam sit nemo ullam asperiores reprehenderit ratione iste, nihil culpa blanditiis nobis recusandae libero vel porro?"},
{title:"Education ",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus minima nemo praesentium esse laudantium laboriosam odio dolore nobis cum, quod assumenda expedita dignissimos sapiente magni inventore ad, iste sunt nihil commodi fugit unde? Quo, harum voluptate distinctio quae temporibus ipsa dignissimos, illum perspiciatis perferendis voluptatibus eum veritatis voluptates tempora repudiandae suscipit esse quia delectus non nemo. Ea eum explicabo quo eos? Ut, dolore! Cumque consequuntur, ab delectus debitis asperiores deserunt commodi qui voluptatibus fugiat, atque ducimus quas dolorum eligendi, esse excepturi numquam alias amet! Aliquam sit nemo ullam asperiores reprehenderit ratione iste, nihil culpa blanditiis nobis recusandae libero vel porro?"}]
const App=()=>{
    return (
        <div>
         <Navbar/>
         <About/>
         {/* <Section
         title="Skills"
         description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus minima nemo praesentium esse laudantium laboriosam odio dolore nobis cum, quod assumenda expedita dignissimos sapiente magni inventore ad, iste sunt nihil commodi fugit unde? Quo, harum voluptate distinctio quae temporibus ipsa dignissimos, illum perspiciatis perferendis voluptatibus eum veritatis voluptates tempora repudiandae suscipit esse quia delectus non nemo. Ea eum explicabo quo eos? Ut, dolore! Cumque consequuntur, ab delectus debitis asperiores deserunt commodi qui voluptatibus fugiat, atque ducimus quas dolorum eligendi, esse excepturi numquam alias amet! Aliquam sit nemo ullam asperiores reprehenderit ratione iste, nihil culpa blanditiis nobis recusandae libero vel porro?"
         />
          <Section
         title="Skills"
         description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus minima nemo praesentium esse laudantium laboriosam odio dolore nobis cum, quod assumenda expedita dignissimos sapiente magni inventore ad, iste sunt nihil commodi fugit unde? Quo, harum voluptate distinctio quae temporibus ipsa dignissimos, illum perspiciatis perferendis voluptatibus eum veritatis voluptates tempora repudiandae suscipit esse quia delectus non nemo. Ea eum explicabo quo eos? Ut, dolore! Cumque consequuntur, ab delectus debitis asperiores deserunt commodi qui voluptatibus fugiat, atque ducimus quas dolorum eligendi, esse excepturi numquam alias amet! Aliquam sit nemo ullam asperiores reprehenderit ratione iste, nihil culpa blanditiis nobis recusandae libero vel porro?"
         /> */}
       {
      section_data.map((value, index)=>(
       <Section
       title={value.title}
       description={value.description}
       />
      ))

       }
        
        </div>
    );
}

export default App;