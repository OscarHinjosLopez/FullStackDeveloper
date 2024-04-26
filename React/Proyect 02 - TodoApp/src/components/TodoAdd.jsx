import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {


    const {form, handleForm, resetForm} = useForm({
        id: 0,
        description:'',
        done:false
    })

    const goToHandle = (event) =>{
        event.preventDefault()
        if(form.description.length <= 1)return

        const newTodo = {
            id: new Date().getTime(),
            description:form.description,
            done:false
        }
        onNewTodo(newTodo)
        resetForm()
    }

    return (
        <form onSubmit={goToHandle}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control" 
                name="description"
                value={form.description}
                onChange={handleForm}
                />
            <input
                type="submit"
                className="btn btn-outline-primary mt-2" />
        </form>
    )
}
