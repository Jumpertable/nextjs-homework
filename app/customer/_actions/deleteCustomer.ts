'use server'
import { revalidatePath } from 'next/cache'  
import { redirect } from 'next/navigation'

const deleteCustomer = async (id: number) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJpYXQiOjE3NDQ5NTI2MTAsImV4cCI6MTc0NTAzOTAxMH0.AACWVXpe2wnctLtRScrjwzVnjBoFP7iD6TsA7XWi7Tw';
    
    console.log("id: ", id)
    const res = await fetch(`http://localhost:3000/customer/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const json = await res.json();
    console.log("json: ", json)
    if (res.ok) {
        console.log("Customer deleted successfully")
        revalidatePath('/customer')  
    } else {
        console.error("Error deleting customer:", json); 
        redirect('/customer?error=Error deleting customer');
    }
}

export default deleteCustomer