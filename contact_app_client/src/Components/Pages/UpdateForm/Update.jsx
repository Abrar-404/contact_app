const Update = () => {
   const handleUpdate = e => {
     e.preventDefault();

     const allData = {
       name: singleContact?.name,
       email: singleContact?.email,
       phone: singleContact?.phone,
       address: singleContact?.address,
     };

     console.log(allData);

     fetch(`http://localhost:5000/update/${contactId}`, {
       method: 'PUT',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(allData),
     })
       .then(res => res.json())
       .then(data => {
         console.log(data);
         if (data.matchedCount > 0) {
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'Product Updated Successfully',
             showConfirmButton: false,
             timer: 1500,
           });
         }
       });
   };
  return (
    <div>
      
    </div>
  );
};

export default Update;