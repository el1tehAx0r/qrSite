const styles={
  container:{
    margin:'0 auto',
    padding:'50px 10px'
  },
  button: {
 backgroundColor: '#006bfc',
 color: 'white',
 width: 316,
 height: 45,
 fontWeight: '600',
 fontSize: 14,
 cursor: 'pointer',
 border:'none',
 outline: 'none',
 borderRadius: 3,
 marginTop: '25px',
 boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
 }
}
const formStyles={
   container: {
 display: 'flex',
 flexDirection: 'column',
 marginTop: 150,
 justifyContent: 'center',
 alignItems: 'center'
 },
 input: {
 height: 45,
 marginTop: 8,
 width: 300,
 maxWidth: 300,
 padding: '0px 8px',
 fontSize: 16,
 outline: 'none',
 border: 'none',
 borderBottom: '2px solid rgba(0, 0, 0, .3)'
 },
 toggleForm: {
 fontWeight: '600',
 padding: '0px 25px',
 marginTop: '15px',
 marginBottom: 0,
 textAlign: 'center',
 color: 'rgba(0, 0, 0, 0.6)'
 },
 resetPassword: {
 marginTop: '5px',},
 anchor: {
 color: '#006bfc',
 cursor: 'pointer'
 }
}
const containerStyle = { width: 400, margin: '20px auto' }
const inputStyle = { marginTop: 10 }
const buttonStyle = { marginTop: 10 }
export {formStyles,containerStyle,inputStyle,buttonStyle};
export default styles;
