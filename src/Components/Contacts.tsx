

const Contacts = () => {
  return (
    <section className="bg-some-blue-shade  font-inter text-white" id="contacts">
        <div className="flex flex-col md:flex-row items-center justify-center ">
             <div className="p-10 space-y-2.5">
                  <div>
                        <p>Ndagha Kang'oma</p>
                        <p >Area 23, Lilongwe, Malawi</p>
                  </div>
                  <div>
                         
                        <p>+265 99 596 3440</p>
                        <p>+265 88 787 0954</p>
                  </div>
                  <div>
                         <p>ndaghakangoma@gmail.com</p>
                         <p>cis-025-19@must.ac.mw</p>
                  </div>
                 
             </div>
        </div>
            <div className="flex items-center justify-center">
                <p className="text-sm mb-10">&copy; 2025 Ndagha Kang'oma. All rights reserved.</p>
             </div>
    </section>
  )
}

export default Contacts