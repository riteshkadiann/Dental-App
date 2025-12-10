import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const patients = [
    { id: 1, name: 'John Smith', lastVisit: '2024-12-05', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', lastVisit: '2024-12-03', status: 'Active' },
    { id: 3, name: 'Mike Williams', lastVisit: '2024-11-28', status: 'Follow-up' },
    { id: 4, name: 'Emily Davis', lastVisit: '2024-12-01', status: 'Active' },
  ]

  const appointments = [
    { id: 1, patient: 'John Smith', time: '09:00 AM', procedure: 'Cleaning' },
    { id: 2, patient: 'Sarah Johnson', time: '10:30 AM', procedure: 'Filling' },
    { id: 3, patient: 'Mike Williams', time: '02:00 PM', procedure: 'Checkup' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">🦷</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Aura Dental</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'dashboard'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('patients')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'patients'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Patients
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'appointments'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Appointments
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Total Patients</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2">248</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
                <p className="text-green-600 text-sm mt-4">↑ 12% from last month</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Today's Appointments</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2">15</h3>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                </div>
                <p className="text-blue-600 text-sm mt-4">3 upcoming today</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Revenue (This Month)</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2">$12.5K</h3>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <p className="text-green-600 text-sm mt-4">↑ 8% from last month</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Appointments</h3>
              <div className="space-y-3">
                {appointments.map((apt) => (
                  <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center">
                        <span className="text-indigo-700 font-bold">{apt.patient[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{apt.patient}</p>
                        <p className="text-sm text-gray-500">{apt.procedure}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-indigo-600">{apt.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Patients View */}
        {activeTab === 'patients' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800">Patient Management</h2>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                + Add Patient
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Patient Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Last Visit</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {patients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center">
                            <span className="text-indigo-700 font-bold">{patient.name[0]}</span>
                          </div>
                          <span className="font-medium text-gray-800">{patient.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{patient.lastVisit}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          patient.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Appointments View */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800">Appointments</h2>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                + Schedule Appointment
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appointments.map((apt) => (
                <div key={apt.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center">
                        <span className="text-indigo-700 font-bold text-lg">{apt.patient[0]}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{apt.patient}</h3>
                        <p className="text-sm text-gray-500">{apt.procedure}</p>
                      </div>
                    </div>
                    <span className="text-indigo-600 font-semibold">{apt.time}</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Confirm
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-600 text-sm">
            Aura Dental App - Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
