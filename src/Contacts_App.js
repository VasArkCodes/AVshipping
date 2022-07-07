import "antd/dist/antd.css";
import "./App.css";
import { Button, Table, Modal, Input, Row } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

var valueCounter = 0;

function Contacts_App() {
  const initialValues = {shipCode: "", Did: "", Voip: "", FBB: "", Mobiles: "", Vms: ""}
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors]=useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
   
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    
   

    //-----------------postVsl
    setIsSubmit(true);
   
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);  
  const [dataSource, setDataSource] = useState([
   //   {
 //     shipCode: 1,
 //     Did: "John",
 //     Voip: "john@gmail.com",
 //     Vms: "John Vms",
 //   },
 //   {
 //     shipCode: 2,
 //     Did: "DavshipCode",
 //     Voip: "davshipCode@gmail.com",
 //     Vms: "DavshipCode Vms",
 //   },
 //   {
 //     shipCode: 3,
 //     Did: "James",
 //     Voip: "james@gmail.com",
 //     Vms: "James Vms",
 //   },
 //   {
 //     shipCode: 4,
 //     Did: "Sam",
 //     Voip: "sam@gmail.com",
 //     Vms: "Sam Vms",
 //   },
  ]);
  
  const validate =  (values) => {
    const errors = {};
  }
  const columns = [
    {
      key: "1",
      title: "shipCode",
      dataIndex: "shipCode",
    },
    {
      key: "2",
      title: "Did",
      dataIndex: "Did",
    },
    {
      key: "3",
      title: "Voip",
      dataIndex: "Voip",
    },
    {
      key: "4",
      title: "Vms",
      dataIndex: "Vms",
    },
    {
      key: "5",
      title: "FBB",
      dataIndex: "FBB",
    },
    {
      key: "6",
      title: "Mobiles",
      dataIndex: "Mobiles",
    },
    {
      key: "7",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];


  const buttonClicked = () => {


    if (valueCounter == 0){
      onAddStudent();
    } else{
      alert("One entry max!")
    }
  }

  const onAddStudent = () => {
   // const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      shipCode: formValues.shipCode,
      Did: formValues.Did,
      Voip: formValues.Voip,
      Vms: formValues.Vms,
      FBB:formValues.FBB,
      Mobiles: formValues.Mobiles,
    }
    ;
    valueCounter = valueCounter+1;
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
    
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.shipCode !== record.shipCode);
          
        });
        valueCounter = valueCounter -1;
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="App">
      <header className="App-header">
      
        <div className="field">
          <label>Ship Code: </label>
          <input
            type="text"
            name="shipCode"
            placeholder="shipCode"
           value={ formValues.shipCode}
           onChange={handleChange}
            
          />
          
        </div>
        <div className="field">
          <label>DID: </label>
          <input
            type="text"
            name="Did"
            placeholder="Did"
           value={ formValues.Did}
           onChange={handleChange}
            
          />
          
        </div>
        <div className="field">
          <label>Voip: </label>
          <input
            type="text"
            name="Voip"
            placeholder="Voip"
           value={ formValues.Voip}
           onChange={handleChange}
            
          />
          
        </div>
        <div className="field">
          <label>Vms: </label>
          <input
            type="text"
            name="Vms"
            placeholder="Vms"
           value={ formValues.Vms}
           onChange={handleChange}
            
          />
          
        </div>
        <div className="field">
          <label>FBB: </label>
          <input
            type="text"
            name="FBB"
            placeholder="FBB"
           value={ formValues.FBB}
           onChange={handleChange}
            
          />
          
        </div>
        <div className="field">
          <label>Mobiles: </label>
          <input
            type="text"
            name="Mobiles"
            placeholder="Mobiles"
           value={ formValues.Mobiles}
           onChange={handleChange}
            
          />
          
        </div>
        <Button onClick={buttonClicked}>Add a new Contact</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.shipCode === editingStudent.shipCode) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          
          <Input
            value={editingStudent?.Did}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Did: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.Voip}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Voip: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.Vms}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Vms: e.target.value };
              });
            }}
          />
           <Input
            value={editingStudent?.FBB}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, FBB: e.target.value };
              });
            }}
          />
           <Input
            value={editingStudent?.Mobiles}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Mobiles: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}
export default Contacts_App;