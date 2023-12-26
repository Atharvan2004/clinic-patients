import "../styles/newPatient.css"

export default function NewPatient(){
    return(

          <form className="patient-form" action="/submit" method="post">
            
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
        
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required />
        
            
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
            
        
            
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="0" required />
        
        
            <label for="occupation">Occupation:</label>
            <input type="text" id="occupation" name="occupation"  />
        
            
            <button className="patient" type="submit">Submit</button>
          </form>  
    )
}