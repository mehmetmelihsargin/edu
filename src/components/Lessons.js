import { React, useEffect } from 'react';


const Lessons = () => {
  // const [products, setproducts] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer 00D8d000005zrd6!AREAQHRwQK_5V3eCWCTtAI7UQMKDK5hS7sIzGlcGqSo64SsQhucVetztySgDJyvFD5qM4wmdgFAaGsb5B643u4.kmjOnOZCv' },


    };
    fetch('https://onlineedu-dev-ed.my.salesforce.com/services/apexrest/Lesson', requestOptions)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // setproducts(json);

      });

    // fetch('https://afternoon-dusk-68458.herokuapp.com/users')
    // .then(res => console.log(res))
  }, [])
  // https://fakestoreapi.com/products?limit=10

  return (
    <div className='grid'>
      <section className="overflow-hidden text-gray-700 mt-12">
        <div className="py-2 mx-auto lg:pt-12 ">
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 items-center">
            <div className="flex w-full">
              <div className="w-full p-1 flex">
                <img alt="gallery" className="block object-cover object-center w-full h-auto rounded-lg"
                  src="https://guclumanset.com/wp-content/uploads/2022/08/lgs-matematik.jpg" />
              </div>
            </div>
            <div className="flex flex-wrap h-full w-full ">
              <div className="w-full p-1 flex justify-center">
                <img alt="gallery" className="block object-cover object-center w-full h-auto rounded-lg"
                  src="https://millidusunce.com/wp-content/uploads/2019/12/turkce-1.png" />
              </div>
            </div>
            <div className="flex flex-wrap w-full h-full ">
              <div className="w-full p-1 flex justify-center">
                <img alt="gallery" className="block object-cover object-center w-full h-auto rounded-lg"
                  src="https://80yilkucukcigliio.meb.k12.tr/meb_iys_dosyalar/35/25/313299/resimler/2020_04/k_01164359_english.jpg" />
              </div>
            </div>
            <div className="flex flex-wrap w-full ">
              <div className="w-full p-1 flex justify-center">
                <img alt="gallery" className="block object-cover object-center w-full h-auto rounded-lg"
                  src="https://hakkialtopio.meb.k12.tr/meb_iys_dosyalar/38/14/766315/resimler/2020_03/k_29234400_fenbilimleri.jpg" />
              </div>
            </div>
            <div className="flex flex-wrap w-full ">
              <div className="w-full p-1 flex justify-center">
                <img alt="gallery" className="block object-cover object-center w-full h-auto rounded-lg"
                  src="https://www.ozeldersdernegi.com/files/03-2020/ad24331/kimya-ogretmeni-kimya-dersi-farketmez-917911497_large.png" />
              </div>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="w-full p-1 flex justify-center">
                <img alt="gallery" className="block object-cover object-center w-full h-auto rounded-lg"
                  src="https://ogretmensosyalbilgiler.files.wordpress.com/2019/01/3e973-2019-01-14_114822.jpg" />
              </div>
            </div>
          </div>
        </div >
      </section >
      {/* {products ? products.map((item) => (
                           <div className="flex justify-center mt-20 w-2/4">
                          <div className="block p-6 rounded-lg shadow-lg bg-blue-100 w-3/4">
                            
                             <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.category.slice(1, 10).toUpperCase()}</h5>
                             <p className="text-gray-700 text-base mb-4 h-16">
                               {item.description.slice(1, 50).toUpperCase()}
                             </p>
                             
                             <div className='flex justify-evenly'>
                            <a href="https://zoom.us/" target='blank'> 
                            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Enter Live</button></a>
                             <button type="button" className=" inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Watch Records</button>
                             </div>
                           </div>
                         </div> 
        )) : 'Loading'} */}
    </div >
  )
}

export default Lessons