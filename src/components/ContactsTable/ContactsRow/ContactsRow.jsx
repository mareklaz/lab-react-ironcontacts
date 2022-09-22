import './ContactsRow.css'

function ContactsRow ({ number, name, popularity, pictureUrl }) {

  return (
    <tr className="">
      <th scope="row">{number}</th>
      <td><img className="" src={pictureUrl} alt="" width={98} height={145} /></td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  )
};

export default ContactsRow;

