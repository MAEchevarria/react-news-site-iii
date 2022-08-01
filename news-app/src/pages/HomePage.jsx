import ArticleList from "../components/ArticleList"
import {Form, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import ArticleTeaser from "../components/ArticleTeaser"

function HomePage ({articles}){
    const [searchTitle, setSearchTitle] = useState('')
    const [results, setResults] = useState([])

    // handle search updates on change
    const handleChange = (event) => {
        const value = event.target.value
        // search input value
        setSearchTitle(value)
    }

    // useEffect is tracking searchTitle; if value is set, it will filter articles and set results
    // results are stored and conditionally rendered
    useEffect( () => {
        if (searchTitle != ''){
            const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
            setResults(filteredArticles)
        }
    }, [searchTitle])
    
    return (
        <div>
            <Form >
                <Form.Control 
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    onChange={(event) => {handleChange(event)}}
                />
            </Form>
            <div>
                {results 
                    ? <div>
                        <h2>Search results</h2>
                        {results.map((article) => (
                            <ArticleTeaser key={article.id} {...article} />
                        ))}</div>
                    : ''
                }
            </div>
            <hr />
            <h2>All Articles</h2>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage