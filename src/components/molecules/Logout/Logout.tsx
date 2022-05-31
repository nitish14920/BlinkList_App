import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
interface Logout {
  className?: string;
}
const LogoutButton = ({ className }: Logout) => {
  const { logout } = useAuth0();

  return (
    <button
      data-testid="logoutTest"
      className={className}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
