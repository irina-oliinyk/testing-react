import './Icons.css'

import { HiUser } from "react-icons/hi";

export default function Icons({ name }) {
  return (
    <div>
      <p><HiUser className="my-icon" size="64" /> {name}</p>
    </div>
  );
};