import { useState, useEffect } from 'react'
import { io, Socket } from 'socket.io-client'
import './App.css'

function App() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io('http://localhost:3001')
    
    newSocket.on('connect', () => {
      console.log('Connected to server')
      setConnected(true)
    })

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server')
      setConnected(false)
    })

    setSocket(newSocket)

    return () => {
      newSocket.close()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Collaborative App</h1>
        <p>Application de gestion de projet et collaboration en temps réel</p>
        
        <div className="status">
          <div className={`status-indicator ${connected ? 'connected' : 'disconnected'}`}>
            {connected ? '🟢 Connecté' : '🔴 Déconnecté'}
          </div>
          <p>Socket.io: {connected ? 'Actif' : 'Inactif'}</p>
        </div>

        <div className="features">
          <h2>Fonctionnalités à venir :</h2>
          <ul>
            <li>✅ Authentification JWT</li>
            <li>✅ Gestion de projets</li>
            <li>✅ Tableaux Kanban</li>
            <li>✅ Collaboration en temps réel</li>
            <li>✅ Messagerie intégrée</li>
            <li>✅ Upload de fichiers</li>
          </ul>
        </div>

        <div className="tech-stack">
          <h3>Stack technique :</h3>
          <div className="tech-badges">
            <span className="badge">React 18</span>
            <span className="badge">TypeScript</span>
            <span className="badge">Vite</span>
            <span className="badge">Node.js</span>
            <span className="badge">Express</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Prisma</span>
            <span className="badge">Socket.io</span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App