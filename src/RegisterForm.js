import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('registrations')
      .insert([{ name, phone, email }]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Registration successful!");
      setName(''); setPhone(''); setEmail('');
    }
  };

  // Ensure this styles object is defined inside your component
  const styles = {
    container: { maxWidth: '400px', margin: '50px auto', padding: '30px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center' },
    input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', backgroundColor: '#e63946', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }
  };

  return (
    <div style={styles.container}>
      <h2>Join SS Martial Arts</h2>
      <form onSubmit={handleSubmit}>
        <input style={styles.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input style={styles.input} type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button style={styles.button} type="submit">Register Now</button>
      </form>
    </div>
  );
}