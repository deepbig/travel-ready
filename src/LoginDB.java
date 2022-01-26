import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



public class LoginDB {

    Connection con = null;
    PreparedStatement ps = null;
    ResultSet rs = null;
    int st;//status

    public User checkLogin(String userName) {
        User user = new User();
        con = ConnectDB.getConnection();
        try {
            String query = "SELECT * FROM User where email=?";
            ps = con.prepareStatement(query);
            ps.setString(1, userName);
            rs = ps.executeQuery();
            while (rs.next()) {
                user.setUserName(rs.getString("userName"));
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setUser_DOB(rs.getString("date of birth"));
                user.setPhone(rs.getString("phone"));
                user.setAddress(rs.getString("address"));
                user.setPassword(rs.getString("password"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                con.close();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
        return user;
    }
}
