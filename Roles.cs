// Decompiled with JetBrains decompiler
// Type: CombinedCode.Roles
// Assembly: CombinedCode, Version=5.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 78208ADE-09FB-4508-A192-FD318769BFA8
// Assembly location: C:\Users\abhi\Downloads\CombinedCode.dll

using System.Collections;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace CombinedCode
{
  public class Roles
  {
    private Logger obj = new Logger();

    public ArrayList getPerformers(string roles, string definition, string brand, string category, string demandspace)
    {
      this.obj.APICallLogMessageToFile("Inside getPerformers");
      this.obj.APICallLogMessageToFile(nameof (Roles) + roles);
      this.obj.APICallLogMessageToFile("Definition" + definition);
      this.obj.APICallLogMessageToFile("Brand" + brand);
      this.obj.APICallLogMessageToFile("Category" + category);
      this.obj.APICallLogMessageToFile("Demandspace" + demandspace);
      ArrayList arrayList = new ArrayList();
      ArrayList UsersInR1 = this.getUsersWithRoleSet(roles);
      if (definition.Contains("b"))
        UsersInR1 = this.getCommonUsers(UsersInR1, this.getUsersinRole(brand));
      if (definition.Contains("c"))
        UsersInR1 = this.getCommonUsers(UsersInR1, this.getUsersinRole(category));
      if (definition.Contains("d"))
        UsersInR1 = this.getCommonUsers(UsersInR1, this.getUsersinRole(demandspace));
      return UsersInR1;
    }

    public ArrayList getUsersWithRoleSet(string roles)
    {
      this.obj.APICallLogMessageToFile("Inside getUsersWithRoleSet " + roles);
      ArrayList UsersInR1 = new ArrayList();
      ArrayList arrayList = new ArrayList((ICollection) roles.Split('/'));
      if (arrayList.Count == 1)
        UsersInR1 = this.getUsersWithAllRoles(arrayList[0].ToString());
      for (int index = 0; index < arrayList.Count - 1; ++index)
      {
        if (index == 0)
          UsersInR1 = this.getUsersWithAllRoles(arrayList[index].ToString());
        UsersInR1 = this.getAllUsers(UsersInR1, this.getUsersWithAllRoles(arrayList[index + 1].ToString()));
      }
      return UsersInR1;
    }

    public ArrayList getAllUsers(ArrayList UsersInR1, ArrayList UsersInR2)
    {
      this.obj.APICallLogMessageToFile("Inside getAllUsers ");
      this.obj.APICallLogMessageToFile("UsersInR1 " + (object) UsersInR1 + "UsersinR2 " + (object) UsersInR2);
      foreach (object obj in UsersInR2)
      {
        if (!UsersInR1.Contains(obj))
          UsersInR1.Add(obj);
      }
      return UsersInR1;
    }

    public ArrayList getUsersWithAllRoles(string roles)
    {
      this.obj.APICallLogMessageToFile("Inside getUsersWithAllRoles");
      ArrayList UsersInR1 = new ArrayList();
      ArrayList arrayList = new ArrayList((ICollection) roles.Split('+'));
      if (arrayList.Count == 1)
      {
        UsersInR1 = this.getUsersinRole(roles);
      }
      else
      {
        for (int index = 0; index < arrayList.Count - 1; ++index)
        {
          if (index == 0)
            UsersInR1 = this.getUsersinRole(arrayList[index].ToString());
          UsersInR1 = this.getCommonUsers(UsersInR1, this.getUsersinRole(arrayList[index + 1].ToString()));
        }
      }
      return UsersInR1;
    }

    public ArrayList getCommonUsers(ArrayList UsersInR1, ArrayList UsersInR2)
    {
      this.obj.APICallLogMessageToFile("Inside getCommonUsers");
      ArrayList arrayList = new ArrayList();
      foreach (int num in UsersInR1.Cast<int>().Intersect<int>(UsersInR2.Cast<int>()))
        arrayList.Add((object) num);
      return arrayList;
    }

    public ArrayList getCommonUsers(string role1, string role2)
    {
      this.obj.APICallLogMessageToFile("Inside getCommonUsers");
      ArrayList usersinRole1 = this.getUsersinRole(role1);
      ArrayList usersinRole2 = this.getUsersinRole(role2);
      ArrayList arrayList = new ArrayList();
      foreach (int num in usersinRole1.Cast<int>().Intersect<int>(usersinRole2.Cast<int>()))
        arrayList.Add((object) num);
      return arrayList;
    }

    public ArrayList getUsersinRole(string role)
    {
      this.obj.APICallLogMessageToFile("Inside getUsersinRole");
      ArrayList arrayList = new ArrayList();
      DataTable dataTable = new DataTable();
      this.obj.APICallLogMessageToFile("Connection open");
      string appSetting = ConfigurationManager.AppSettings["ConnectionString"];
      this.obj.APICallLogMessageToFile("Connection" + appSetting);
      string cmdText = "select ur.idUser from P_User_ADGroups ur join P_ADGroups r on r.idP_ADGroups =ur.idP_ADGroups join WFUSER u on u.idUser = ur.idUser where u.enabled = 1 and u.enabledForAssignation = 1 and r.SADGroupName = '" + role + "'";
      this.obj.APICallLogMessageToFile("Query" + cmdText);
      SqlConnection connection = new SqlConnection(appSetting);
      SqlCommand selectCommand = new SqlCommand(cmdText, connection);
      connection.Open();
      SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(selectCommand);
      sqlDataAdapter.Fill(dataTable);
      connection.Close();
      sqlDataAdapter.Dispose();
      foreach (DataRow row in (InternalDataCollectionBase) dataTable.Rows)
        arrayList.Add((object) (int) row["idUser"]);
      this.obj.APICallLogMessageToFile("UserIds" + (object) arrayList);
      return arrayList;
    }
  }
}
