function AddItem() {
    return (
            <>
  <div>
  <h2 style={{margin:"5px"}} >My To Do List</h2>
  <input type="text" id="myInput" placeholder="Title..." />
  <span  className="addBtn">Add</span>
</div>

            </>
    )
}

export default AddItem;