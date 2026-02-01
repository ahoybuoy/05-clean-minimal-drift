import { Container } from '../layout/Container'
import { Grid } from '../layout/Grid'
import { Stat, StatsGrid } from '../data/Stats'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../data/Table'
import { Badge } from '../ui/Badge'

const stats = [
  { label: 'Total Users', value: '12,345', change: { value: '+12%', type: 'increase' as const } },
  { label: 'Active Projects', value: '89', change: { value: '+5%', type: 'increase' as const } },
  { label: 'Conversion Rate', value: '3.2%', change: { value: '-0.4%', type: 'decrease' as const } },
  { label: 'Avg Response Time', value: '124ms', change: { value: 'No change', type: 'neutral' as const } },
]

const recentProjects = [
  { name: 'Design System v2', status: 'In Progress', updated: '2 hours ago' },
  { name: 'Mobile App Redesign', status: 'Completed', updated: '1 day ago' },
  { name: 'API Documentation', status: 'In Progress', updated: '3 days ago' },
  { name: 'Analytics Dashboard', status: 'Pending', updated: '1 week ago' },
]

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back, here's what's happening.</p>

        <StatsGrid className="mt-8">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </StatsGrid>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentProjects.map((project) => (
                    <TableRow key={project.name}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            project.status === 'Completed' ? 'success' :
                            project.status === 'In Progress' ? 'info' : 'default'
                          }
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-500">{project.updated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivityItem
                  title="New component added"
                  description="Button component was added to the design system"
                  time="5 minutes ago"
                />
                <ActivityItem
                  title="Design review completed"
                  description="Navigation patterns review was approved"
                  time="1 hour ago"
                />
                <ActivityItem
                  title="Token updated"
                  description="Primary color updated from #0066cc to #0052cc"
                  time="3 hours ago"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}

function ActivityItem({ title, description, time }: { title: string; description: string; time: string }) {
  return (
    <div className="flex gap-4">
      <div className="h-2 w-2 mt-2 rounded-full bg-blue-600" />
      <div className="flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="mt-1 text-xs text-gray-400">{time}</p>
      </div>
    </div>
  )
}
