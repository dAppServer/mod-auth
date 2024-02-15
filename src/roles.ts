import { AuthUser } from "../../../Code/server/src/types.ts";
import { UserRole } from "../../../Code/server/src/types/user/user-role.ts";

const hasUserRole = (user: AuthUser, roles: UserRole | UserRole[]) => {
  const userRoles = user.roles;

  if (typeof (roles) == "string") {
    roles = [roles];
  }

  let isRoleMatched = false;
  roles.forEach((role) => {
    if (userRoles.includes(role)) {
      isRoleMatched = true;
    }
  });

  return isRoleMatched;
};

export { hasUserRole };
