"use server"

export const createOrder = async(formData: FormData) => {

  const name = formData.get('name')
  const lastname = formData.get('name')

  if(!name || !lastname) return

  const newOrder = {
    name: name,
    lastname: lastname
  }

  console.log(newOrder)
}